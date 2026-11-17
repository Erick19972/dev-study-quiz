import { useEffect, useState } from "react";
import { angularQuestions } from "./angularQuestions";
import "./PreguntasAngular.css";

const MYMEMORY_URL = "https://api.mymemory.translated.net/get";
const MAX_TEXT_BYTES = 500;

const toolbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 8,
};

function splitText(text) {
  const encoder = new TextEncoder();
  const segments = [];
  let remaining = text.trim();

  while (encoder.encode(remaining).length > MAX_TEXT_BYTES) {
    let end = 0;
    let bytes = 0;
    let lastSpace = 0;

    for (const character of remaining) {
      const characterBytes = encoder.encode(character).length;

      if (bytes + characterBytes > MAX_TEXT_BYTES) break;
      if (/\s/u.test(character)) lastSpace = end;

      bytes += characterBytes;
      end += character.length;
    }

    const cut = lastSpace || end;
    segments.push(remaining.slice(0, cut).trim());
    remaining = remaining.slice(cut).trimStart();
  }

  if (remaining) segments.push(remaining);

  return segments;
}

async function translateText(text, signal) {
  const decoder = document.createElement("textarea");
  const translatedLines = [];

  for (const line of text.split(/\r?\n/)) {
    const translatedSegments = [];

    for (const segment of splitText(line)) {
      const url = new URL(MYMEMORY_URL);
      url.searchParams.set("q", segment);
      url.searchParams.set("langpair", "en|es");

      let response;

      try {
        response = await fetch(url, { signal });
      } catch (error) {
        if (signal.aborted) throw error;
        throw new Error("El navegador no pudo conectar con MyMemory.");
      }

      if (response.status === 429) {
        throw new Error("Se alcanzó el límite de traducción de MyMemory.");
      }

      if (!response.ok) {
        throw new Error(`MyMemory respondió con HTTP ${response.status}.`);
      }

      const data = await response.json();
      const status = Number(data.responseStatus);
      const translatedText = data.responseData?.translatedText;

      if (status === 429 || data.quotaFinished === true) {
        throw new Error("Se alcanzó el límite de traducción de MyMemory.");
      }

      if (
        status !== 200 ||
        typeof translatedText !== "string" ||
        !translatedText.trim()
      ) {
        throw new Error("MyMemory devolvió una traducción incompleta.");
      }

      decoder.innerHTML = translatedText.replaceAll("<", "&lt;");
      translatedSegments.push(decoder.value.trim());
    }

    translatedLines.push(translatedSegments.join(" "));
  }

  return translatedLines.join("\n");
}

async function translateQuestion(original, signal) {
  const [question, options, explanation] = await Promise.all([
    translateText(original.question, signal),
    Promise.all(original.options.map((option) => translateText(option, signal))),
    original.explanation?.trim()
      ? translateText(original.explanation, signal)
      : original.explanation,
  ]);

  return { question, options, explanation };
}

export default function PreguntasAngular() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(() => new Map());
  const [translationError, setTranslationError] = useState("");
  const [translationAttempt, setTranslationAttempt] = useState(0);

  const total = angularQuestions.length;
  const currentQuestion = angularQuestions[currentIndex];
  const cachedTranslation = translations.get(currentQuestion);
  const activeTranslation = language === "es" ? cachedTranslation : undefined;
  const displayedQuestion = activeTranslation ?? currentQuestion;
  const displayedLanguage = activeTranslation ? "es" : "en";

  const isCorrect = selectedAnswer === currentQuestion?.answer;
  const isTranslating =
    language === "es" &&
    Boolean(currentQuestion) &&
    !finished &&
    !activeTranslation &&
    !translationError;

  const answered = finished ? total : currentIndex + (checked ? 1 : 0);
  const progress = total > 0 ? (answered / total) * 100 : 0;

  useEffect(() => {
    if (language !== "es" || !currentQuestion || finished || cachedTranslation) {
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => {
      controller.abort();
      setTranslationError("MyMemory tardó demasiado en responder.");
    }, 20_000);

    translateQuestion(currentQuestion, controller.signal)
      .then((translation) => {
        if (controller.signal.aborted) return;

        setTranslations((previous) => {
          const next = new Map(previous);
          next.set(currentQuestion, translation);
          return next;
        });
      })
      .catch((error) => {
        if (controller.signal.aborted) return;

        controller.abort();
        setTranslationError(error.message);
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [language, currentQuestion, finished, cachedTranslation, translationAttempt]);


  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, [currentIndex, finished]);

  function listenToQuestion() {
    const text = currentQuestion?.question?.trim();
    if (!text) return;

    const synthesis = window.speechSynthesis;

    if (!synthesis || typeof window.SpeechSynthesisUtterance !== "function") {
      window.alert("Este navegador no admite la lectura en voz alta.");
      return;
    }

    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;

    utterance.onerror = ({ error }) => {
      if (error === "canceled" || error === "interrupted") return;
      window.alert("No se pudo reproducir la pregunta en inglés.");
    };

    synthesis.cancel();
    synthesis.speak(utterance);
  }

  function toggleTranslation() {
    setTranslationError("");
    setLanguage((previous) => (previous === "en" ? "es" : "en"));
  }

  function retryTranslation() {
    setTranslationError("");
    setTranslationAttempt((previous) => previous + 1);
  }

  function checkAnswer() {
    if (!currentQuestion || selectedAnswer === null || checked || finished) {
      return;
    }

    if (isCorrect) setScore((previous) => previous + 1);
    setChecked(true);
  }

  function nextQuestion() {
    if (!checked || finished) return;

    if (currentIndex === total - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((previous) => previous + 1);
    setSelectedAnswer(null);
    setChecked(false);
    setTranslationError("");
  }

  function restart() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setChecked(false);
    setScore(0);
    setFinished(false);
    setTranslationError("");
  }

  return (
    <main className="angular-page">
      <section className="angular-card">
        <header>
          <p className="angular-eyebrow">ANGULAR PRACTICE</p>
          <h1>A little practice. Better Angular.</h1>
          <p className="angular-subtitle">
            Test your knowledge, understand the answers, and improve.
          </p>
        </header>

        <label className="angular-category-label" htmlFor="angular-category">
          Choose a category
        </label>

        <select
          id="angular-category"
          className="angular-category-select"
          defaultValue="Angular Basic"
        >
          <option value="Angular Basic">Angular Basic ({total})</option>
        </select>

        <div className="angular-status">
          <span>
            {finished
              ? "Practice completed"
              : `Question ${currentQuestion ? currentIndex + 1 : 0} of ${total}`}
          </span>
          <strong>Score: {score}</strong>
        </div>

        <div
          className="angular-progress"
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div style={{ width: `${progress}%` }} />
        </div>

        {finished ? (
          <div className="angular-results">
            <span className="angular-badge">Completed</span>
            <h2>Well done!</h2>

            <p>
              You answered <strong>{score}</strong> of{" "}
              <strong>{total}</strong> questions correctly.
            </p>

            <button type="button" className="angular-primary" onClick={restart}>
              Practice again
            </button>
          </div>
        ) : !currentQuestion ? (
          <p>No questions available.</p>
        ) : (
          <>
            <div style={toolbarStyle}>
              <span className="angular-badge">{currentQuestion.category}</span>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  gap: 8,
                  marginLeft: "auto",
                }}
              >
                <button
                  type="button"
                  className="angular-primary"
                  onClick={toggleTranslation}
                  lang={language === "en" ? "es" : "en"}
                >
                  {language === "en" ? "Traducir al español" : "Show in English"}
                </button>

                <button
                  type="button"
                  className="angular-primary"
                  onClick={listenToQuestion}
                  lang="es"
                >
                  🔊 Escuchar en inglés
                </button>
              </div>
            </div>

            {isTranslating && (
              <p role="status" lang="es">Traduciendo…</p>
            )}

            {language === "es" && translationError && (
              <div lang="es">
                <p role="status">No se pudo traducir. {translationError}</p>
                <button
                  type="button"
                  className="angular-primary"
                  onClick={retryTranslation}
                >
                  Reintentar
                </button>
              </div>
            )}

            <h2
              id="angular-question-title"
              className="angular-question"
              lang={displayedLanguage}
            >
              {displayedQuestion.question}
            </h2>

            <div
              className="angular-options"
              role="group"
              aria-labelledby="angular-question-title"
            >
              {displayedQuestion.options.map((option, index) => {
                let className = "angular-option";

                if (checked && index === currentQuestion.answer) {
                  className += " is-correct";
                } else if (checked && index === selectedAnswer) {
                  className += " is-incorrect";
                } else if (index === selectedAnswer) {
                  className += " is-selected";
                }

                return (
                  <button
                    key={`${currentIndex}-${index}`}
                    type="button"
                    className={className}
                    disabled={checked}
                    aria-pressed={selectedAnswer === index}
                    onClick={() => setSelectedAnswer(index)}
                  >
                    <strong>{String.fromCharCode(65 + index)}.</strong>
                    <span lang={displayedLanguage}>{option}</span>
                  </button>
                );
              })}
            </div>

            {!checked ? (
              <button
                type="button"
                className="angular-primary"
                disabled={selectedAnswer === null}
                onClick={checkAnswer}
              >
                Check answer
              </button>
            ) : (
              <>
                <div
                  className="angular-feedback"
                  aria-live="polite"
                  lang={displayedLanguage}
                >
                  <h3
                    className={
                      isCorrect ? "angular-correct-text" : "angular-incorrect-text"
                    }
                  >
                    {isCorrect
                      ? (activeTranslation ? "✓ ¡Correcto!" : "✓ Correct!")
                      : (activeTranslation ? "✕ Incorrecto" : "✕ Incorrect")}
                  </h3>

                  <p style={{ whiteSpace: "pre-line" }}>
                    {displayedQuestion.explanation}
                  </p>

                  {currentQuestion.code && (
                    <>
                      <h4>
                        {activeTranslation ? "Ejemplo de código" : "Code example"}
                      </h4>

                      <pre className="angular-code">
                        <code>{currentQuestion.code}</code>
                      </pre>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  className="angular-primary"
                  onClick={nextQuestion}
                >
                  {currentIndex === total - 1
                    ? "See results"
                    : "Next question →"}
                </button>
              </>
            )}
          </>
        )}
      </section>
    </main>
  );
}
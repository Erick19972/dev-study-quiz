import { useEffect, useState } from "react";
import questions from "./questions";

const ALL_CATEGORIES = "All Categories";
const MYMEMORY_URL = "https://api.mymemory.translated.net/get";
const MAX_TEXT_BYTES = 500;

const categories = [
  "Java Versions",
  "Modern Java",
  "Object-Oriented Programming",
  "SOLID Principles",
  "Interfaces and Abstract Classes",
  "Exception Handling",
  "Threads",
  "Collections",
  "SpringBoot",
  "SpringBoot - API",
  "Design Patterns",
  "Kafka",
  "Streams",
];

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "#f3f5fb",
    padding: "40px 16px",
    fontFamily: "Inter, system-ui, sans-serif",
    color: "#18213b",
    boxSizing: "border-box",
  },
  card: {
    width: "100%",
    maxWidth: 1100,
    minWidth: 0,
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "clamp(20px, 4vw, 40px)",
    background: "#ffffff",
    borderRadius: 24,
    boxShadow: "0 12px 45px #18213b0d",
    textAlign: "left",
  },
  badge: {
    color: "#6254d9",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 2,
  },
  title: {
    fontSize: "clamp(26px, 4vw, 32px)",
    marginBottom: 8,
    color: "#000000",
    fontWeight: 800,
    lineHeight: 1.3,
  },
  muted: {
    color: "#687189",
    lineHeight: 1.6,
  },
  filter: {
    marginTop: 28,
  },
  label: {
    display: "block",
    marginBottom: 8,
    fontSize: 14,
    fontWeight: 700,
  },
  select: {
    width: "100%",
    padding: "12px 14px",
    border: "2px solid #e7e9f1",
    borderRadius: 12,
    background: "#ffffff",
    color: "#18213b",
    fontFamily: "inherit",
    fontSize: 15,
    boxSizing: "border-box",
    cursor: "pointer",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 28,
    fontSize: 14,
  },
  progress: {
    height: 7,
    background: "#eeedf8",
    borderRadius: 10,
    overflow: "hidden",
    margin: "24px 0",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
  },
  category: {
    display: "inline-block",
    padding: "6px 12px",
    background: "#f2efff",
    color: "#6254d9",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 700,
  },
  question: {
    fontSize: "clamp(20px, 2.5vw, 23px)",
    lineHeight: 1.4,
    color: "#dc2626",
    fontWeight: 800,
    overflowWrap: "anywhere",
  },
  code: {
    background: "#18213b",
    color: "#e5e9ff",
    borderRadius: 12,
    padding: 20,
    overflowX: "auto",
    lineHeight: 1.7,
    fontSize: 14,
  },
  option: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    width: "100%",
    padding: 16,
    marginBottom: 12,
    border: "2px solid #e7e9f1",
    borderRadius: 12,
    background: "#ffffff",
    color: "#18213b",
    textAlign: "left",
    fontFamily: "inherit",
    fontSize: 15,
    lineHeight: 1.5,
    boxSizing: "border-box",
    cursor: "pointer",
  },
  button: {
    padding: "14px 22px",
    border: 0,
    borderRadius: 12,
    background: "#6957e8",
    color: "#ffffff",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
  },
  footer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 24,
  },
};

function splitText(text) {
  const encoder = new TextEncoder();
  const chunks = [];
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
    chunks.push(remaining.slice(0, cut).trim());
    remaining = remaining.slice(cut).trimStart();
  }

  if (remaining) chunks.push(remaining);

  return chunks;
}

async function translateText(text, signal) {
  const translatedLines = [];
  const decoder = document.createElement("textarea");

  for (const line of text.split(/\r?\n/)) {
    const translatedChunks = [];

    for (const chunk of splitText(line)) {
      const url = new URL(MYMEMORY_URL);
      url.searchParams.set("q", chunk);
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
      const translation = data.responseData?.translatedText;

      if (status === 429 || data.quotaFinished === true) {
        throw new Error("Se alcanzó el límite de traducción de MyMemory.");
      }

      if (
        status !== 200 ||
        typeof translation !== "string" ||
        !translation.trim()
      ) {
        throw new Error("MyMemory devolvió una traducción incompleta.");
      }

      decoder.innerHTML = translation.replaceAll("<", "&lt;");
      translatedChunks.push(decoder.value.trim());
    }

    translatedLines.push(translatedChunks.join(" "));
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

export default function PreguntasJava({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(() => new Map());
  const [translationError, setTranslationError] = useState(null);
  const [translationAttempt, setTranslationAttempt] = useState(0);

  const filteredQuestions =
    selectedCategory === ALL_CATEGORIES
      ? questions
      : questions.filter((item) => item.category === selectedCategory);

  const totalQuestions = filteredQuestions.length;
  const originalQuestion = filteredQuestions[questionIndex];
  const cachedTranslation = translations.get(originalQuestion);

  useEffect(() => {
    if (language !== "es" || !originalQuestion || isFinished || cachedTranslation) {
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => {
      controller.abort();
      setTranslationError({
        question: originalQuestion,
        message: "MyMemory tardó demasiado en responder.",
      });
    }, 20_000);

    translateQuestion(originalQuestion, controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return;

        setTranslations((previous) => {
          const next = new Map(previous);
          next.set(originalQuestion, data);
          return next;
        });
      })
      .catch((error) => {
        if (controller.signal.aborted) return;

        controller.abort();
        setTranslationError({
          question: originalQuestion,
          message: error.message,
        });
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [
    language,
    originalQuestion,
    isFinished,
    cachedTranslation,
    translationAttempt,
  ]);

  const activeTranslation = language === "es" ? cachedTranslation : undefined;
  const displayedQuestion = activeTranslation ?? originalQuestion;
  const displayedLanguage = activeTranslation ? "es" : "en";

  const activeError =
    language === "es" &&
    !activeTranslation &&
    translationError?.question === originalQuestion
      ? translationError
      : null;

  const isTranslating =
    language === "es" && Boolean(originalQuestion) && !activeTranslation && !activeError;

  const answeredQuestions = isFinished
    ? totalQuestions
    : questionIndex + (isChecked ? 1 : 0);

  const progress = totalQuestions ? (answeredQuestions / totalQuestions) * 100 : 0;
  const percentage = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;
  const isCorrect = Boolean(originalQuestion) && selectedAnswer === originalQuestion.answer;

  function restartQuiz() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setIsChecked(false);
    setScore(0);
    setIsFinished(false);
    setTranslationError(null);
  }

  function changeCategory(event) {
    setSelectedCategory(event.target.value);
    restartQuiz();
  }

  function toggleTranslation() {
    setTranslationError(null);
    setLanguage((previous) => (previous === "en" ? "es" : "en"));
  }

  function retryTranslation() {
    setTranslationError(null);
    setTranslationAttempt((previous) => previous + 1);
  }

  function checkAnswer() {
    if (!originalQuestion || selectedAnswer === null || isChecked || isFinished) {
      return;
    }

    if (isCorrect) setScore((previous) => previous + 1);

    setIsChecked(true);
  }

  function nextQuestion() {
    if (!isChecked || isFinished) return;

    if (questionIndex >= totalQuestions - 1) {
      setIsFinished(true);
      return;
    }

    setQuestionIndex((previous) => previous + 1);
    setSelectedAnswer(null);
    setIsChecked(false);
    setTranslationError(null);
  }

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            style={{ ...styles.button, marginBottom: 16 }}
          >
            ← Back to menu
          </button>
        )}

        <header>
          <span style={styles.badge}>JAVA PRACTICE</span>
          <h1 style={styles.title}>A little practice. Better Java.</h1>
          <p style={styles.muted}>
            Test your knowledge, understand the answers, and improve.
          </p>
        </header>

        <div style={styles.filter}>
          <label htmlFor="category-select" style={styles.label}>
            Choose a category
          </label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={changeCategory}
            style={styles.select}
          >
            <option value={ALL_CATEGORIES}>
              All Categories ({questions.length})
            </option>
            {categories.map((category) => {
              const count = questions.filter((item) => item.category === category).length;

              return (
                <option key={category} value={category}>
                  {category} ({count})
                </option>
              );
            })}
          </select>
        </div>

        {totalQuestions === 0 ? (
          <div style={{ marginTop: 28 }}>
            <h2>No questions available</h2>
            <p style={styles.muted}>
              There are no questions in this category yet. Choose another
              category or add questions to questions.js.
            </p>
          </div>
        ) : isFinished ? (
          <div style={{ marginTop: 28 }} aria-live="polite">
            <h2 style={{ color: "#000000", fontWeight: 800 }}>Practice complete!</h2>
            <span style={styles.category}>{selectedCategory}</span>
            <p style={{ color: "#6957e8", fontSize: 48, fontWeight: 800, margin: "24px 0" }}>
              {percentage}%
            </p>
            <p style={styles.muted}>
              You answered {score} out of {totalQuestions} questions correctly.
            </p>
            <p style={styles.muted}>
              {percentage >= 80
                ? "Great work! Keep building your Java skills."
                : "Keep practicing. Review the explanations and try again!"}
            </p>
            <button type="button" style={styles.button} onClick={restartQuiz}>
              Practice again
            </button>
          </div>
        ) : (
          <>
            <div style={styles.stats}>
              <span>Question {questionIndex + 1} of {totalQuestions}</span>
              <strong>Score: {score}</strong>
            </div>

            <div
              role="progressbar"
              aria-label="Quiz progress"
              aria-valuenow={answeredQuestions}
              aria-valuemin={0}
              aria-valuemax={totalQuestions}
              style={styles.progress}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: "#6957e8",
                  transition: "width 0.3s",
                }}
              />
            </div>

            <div style={styles.toolbar}>
              {originalQuestion.category && (
                <span style={styles.category}>{originalQuestion.category}</span>
              )}
              <button
                type="button"
                style={styles.button}
                onClick={toggleTranslation}
                lang={language === "en" ? "es" : "en"}
              >
                {language === "en" ? "Traducir al español" : "Show in English"}
              </button>
            </div>

            {isTranslating && (
              <p role="status" lang="es" style={styles.muted}>Traduciendo…</p>
            )}

            {activeError && (
              <div lang="es">
                <p role="status" style={styles.muted}>
                  No se pudo traducir la pregunta. {activeError.message}
                </p>
                <button type="button" style={styles.button} onClick={retryTranslation}>
                  Reintentar
                </button>
              </div>
            )}

            <h2 id="question-title" lang={displayedLanguage} style={styles.question}>
              {displayedQuestion.question}
            </h2>

            {originalQuestion.code && (
              <pre style={styles.code}><code>{originalQuestion.code}</code></pre>
            )}

            <div role="group" aria-labelledby="question-title">
              {displayedQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isAnswer = originalQuestion.answer === index;
                let background = isSelected ? "#f2efff" : "#ffffff";
                let borderColor = isSelected ? "#6957e8" : "#e7e9f1";

                if (isChecked && isAnswer) {
                  background = "#ecfdf3";
                  borderColor = "#24965a";
                } else if (isChecked && isSelected) {
                  background = "#fff0f0";
                  borderColor = "#dc5151";
                }

                return (
                  <button
                    key={`${selectedCategory}-${questionIndex}-${index}`}
                    type="button"
                    aria-pressed={isSelected}
                    disabled={isChecked}
                    onClick={() => setSelectedAnswer(index)}
                    style={{
                      ...styles.option,
                      background,
                      borderColor,
                      cursor: isChecked ? "default" : "pointer",
                    }}
                  >
                    <strong style={{ flexShrink: 0 }}>
                      {String.fromCharCode(65 + index)}.
                    </strong>
                    <span
                      lang={displayedLanguage}
                      style={{ flex: 1, minWidth: 0, overflowWrap: "anywhere" }}
                    >
                      {option}
                    </span>
                    {isChecked && isAnswer && (
                      <span
                        aria-label="Correct answer"
                        style={{ color: "#24965a", fontWeight: 800, flexShrink: 0 }}
                      >
                        ✓
                      </span>
                    )}
                    {isChecked && isSelected && !isAnswer && (
                      <span
                        aria-label="Incorrect answer"
                        style={{ color: "#dc5151", fontWeight: 800, flexShrink: 0 }}
                      >
                        ✕
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {isChecked && (
              <div
                role="status"
                lang={displayedLanguage}
                style={{
                  padding: 18,
                  margin: "20px 0",
                  background: isCorrect ? "#ecfdf3" : "#fff6eb",
                  color: "#18213b",
                  borderRadius: 12,
                  lineHeight: 1.6,
                }}
              >
                <strong>
                  {activeTranslation
                    ? (isCorrect ? "¡Correcto!" : "Respuesta incorrecta.")
                    : (isCorrect ? "Correct! Well done." : "Not quite. Keep learning!")}
                </strong>

                {!isCorrect && (
                  <p style={{ marginBottom: 0 }}>
                    <strong>
                      {activeTranslation ? "Respuesta correcta: " : "Correct answer: "}
                    </strong>
                    {displayedQuestion.options[originalQuestion.answer]}
                  </p>
                )}

                <p style={{ marginBottom: 0, whiteSpace: "pre-line" }}>
                  {displayedQuestion.explanation}
                </p>

                {originalQuestion.example && (
                  <div style={{ marginTop: 20 }}>
                    <strong>
                      {activeTranslation ? "Ejemplo de código" : "Code example"}
                    </strong>
                    <pre style={styles.code}><code>{originalQuestion.example}</code></pre>
                  </div>
                )}
              </div>
            )}

            <footer style={styles.footer}>
              {isChecked ? (
                <button type="button" style={styles.button} onClick={nextQuestion}>
                  {questionIndex === totalQuestions - 1 ? "View results" : "Next question →"}
                </button>
              ) : (
                <button
                  type="button"
                  disabled={selectedAnswer === null}
                  onClick={checkAnswer}
                  style={{
                    ...styles.button,
                    opacity: selectedAnswer === null ? 0.45 : 1,
                    cursor: selectedAnswer === null ? "not-allowed" : "pointer",
                  }}
                >
                  Check answer
                </button>
              )}
            </footer>
          </>
        )}
      </section>
    </main>
  );
}
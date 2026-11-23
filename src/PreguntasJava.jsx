import { useEffect, useState } from "react";
import questions from "./questions";

const ALL_CATEGORIES = "All Categories";
const MYMEMORY_URL = "https://api.mymemory.translated.net/get";
const MAX_TEXT_BYTES = 500;

const EMPTY_ANSWER = {
  selectedAnswer: null,
  codeAnswers: [],
  isChecked: false,
  isCorrect: false,
};

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
  "Practice",
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
  actions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: 8,
    marginLeft: "auto",
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
    whiteSpace: "pre",
    tabSize: 4,
  },
  codeInput: {
    padding: "6px 8px",
    margin: "0 3px",
    border: "2px solid #a99cff",
    borderRadius: 6,
    background: "#ffffff",
    color: "#18213b",
    font: "inherit",
    boxSizing: "content-box",
    opacity: 1,
  },
  tokenBank: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 16,
  },
  token: {
    padding: "10px 16px",
    border: "2px solid #6957e8",
    borderRadius: 10,
    background: "#f2efff",
    color: "#4338ca",
    fontFamily: "monospace",
    fontSize: 16,
    fontWeight: 700,
    cursor: "grab",
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
  disabledButton: {
    opacity: 0.45,
    cursor: "not-allowed",
  },
  footer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
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
    Promise.all(
      (original.options ?? []).map((option) =>
        translateText(option, signal)
      )
    ),
    original.explanation?.trim()
      ? translateText(original.explanation, signal)
      : original.explanation,
  ]);

  return { question, options, explanation };
}

function CodeExercise({
  question,
  codeAnswers,
  isChecked,
  codeResults,
  onAnswerChange,
}) {
  const [selectedToken, setSelectedToken] = useState(null);
  const [hoveredBlank, setHoveredBlank] = useState(null);

  const tokens = [...new Set(question.answers)].sort();

  function startDrag(event, token) {
    event.dataTransfer.setData("text/plain", token);
    event.dataTransfer.effectAllowed = "copy";
  }

  function dropToken(event, index) {
    event.preventDefault();
    setHoveredBlank(null);

    if (isChecked) return;

    const token = event.dataTransfer.getData("text/plain");

    if (tokens.includes(token)) {
      onAnswerChange(index, token);
      setSelectedToken(null);
    }
  }

  function fillSelectedToken(index) {
    if (isChecked || selectedToken === null) return;

    onAnswerChange(index, selectedToken);
    setSelectedToken(null);
  }

  return (
    <div role="group" aria-labelledby="question-title">
      {!isChecked && (
        <p style={styles.muted} lang="es">
          Arrastra una tarjeta a un espacio, o pulsa una tarjeta y luego
          el espacio que quieras completar.
        </p>
      )}

      <div role="group" aria-label="Respuestas disponibles" style={styles.tokenBank}>
        {tokens.map((token) => (
          <button
            key={token}
            type="button"
            draggable={!isChecked}
            disabled={isChecked}
            aria-pressed={selectedToken === token && !isChecked}
            onDragStart={(event) => startDrag(event, token)}
            onDragEnd={() => setHoveredBlank(null)}
            onClick={() =>
              setSelectedToken((previous) =>
                previous === token ? null : token
              )
            }
            style={{
              ...styles.token,
              background:
                selectedToken === token && !isChecked
                  ? "#6957e8"
                  : "#f2efff",
              color:
                selectedToken === token && !isChecked
                  ? "#ffffff"
                  : "#4338ca",
              cursor: isChecked ? "default" : "grab",
              opacity: isChecked ? 0.6 : 1,
            }}
          >
            {token}
          </button>
        ))}
      </div>

      <pre style={styles.code}>
        <code>
          {question.codeParts.map((part, index) => {
            const hasBlank = index < question.answers.length;
            const value = codeAnswers[index] ?? "";
            const isHovered = hoveredBlank === index && !isChecked;

            let borderColor = "#a99cff";
            let background = "#ffffff";

            if (isChecked && hasBlank) {
              borderColor = codeResults[index] ? "#24965a" : "#dc5151";
              background = codeResults[index] ? "#ecfdf3" : "#fff0f0";
            } else if (isHovered) {
              borderColor = "#6957e8";
              background = "#ede9fe";
            }

            return (
              <span key={index}>
                {part}
                {hasBlank && (
                  <input
                    type="text"
                    value={value}
                    disabled={isChecked}
                    aria-label={`Espacio de código ${index + 1}`}
                    aria-invalid={isChecked && !codeResults[index]}
                    autoComplete="off"
                    autoCapitalize="none"
                    spellCheck={false}
                    onDragOver={(event) => {
                      if (isChecked) return;

                      event.preventDefault();
                      event.dataTransfer.dropEffect = "copy";
                      setHoveredBlank(index);
                    }}
                    onDragLeave={() => setHoveredBlank(null)}
                    onDrop={(event) => dropToken(event, index)}
                    onClick={() => fillSelectedToken(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && selectedToken !== null) {
                        event.preventDefault();
                        fillSelectedToken(index);
                      }
                    }}
                    onChange={(event) =>
                      onAnswerChange(index, event.target.value)
                    }
                    style={{
                      ...styles.codeInput,
                      width: `${Math.max(7, value.length + 2)}ch`,
                      borderColor,
                      background,
                      cursor:
                        selectedToken !== null && !isChecked
                          ? "copy"
                          : "text",
                    }}
                  />
                )}
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
}

export default function PreguntasJava({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
  const [answerHistory, setAnswerHistory] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
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
  const isCodeExercise = originalQuestion?.type === "complete-code";

  const currentAnswer = answerHistory[questionIndex] ?? EMPTY_ANSWER;
  const { selectedAnswer, codeAnswers, isChecked } = currentAnswer;

  const codeResults = isCodeExercise
    ? originalQuestion.answers.map(
        (answer, index) =>
          (codeAnswers[index] ?? "").trim() === answer.trim()
      )
    : [];

  const canCheck = isCodeExercise
    ? originalQuestion.answers.length > 0 &&
      originalQuestion.answers.every(
        (_, index) => Boolean(codeAnswers[index]?.trim())
      )
    : Boolean(originalQuestion) && selectedAnswer !== null;

  const isCorrect = isCodeExercise
    ? codeResults.length > 0 && codeResults.every(Boolean)
    : Boolean(originalQuestion) &&
      selectedAnswer === originalQuestion.answer;

  const savedAnswers = Object.values(answerHistory);
  const answeredQuestions = savedAnswers.filter(
    (answer) => answer.isChecked
  ).length;
  const score = savedAnswers.filter(
    (answer) => answer.isChecked && answer.isCorrect
  ).length;
  const pendingQuestions = totalQuestions - answeredQuestions;

  const progress = totalQuestions
    ? (answeredQuestions / totalQuestions) * 100
    : 0;

  const percentage = totalQuestions
    ? Math.round((score / totalQuestions) * 100)
    : 0;

  const solutionCode = isCodeExercise
    ? originalQuestion.codeParts
        .map((part, index) => part + (originalQuestion.answers[index] ?? ""))
        .join("")
    : "";

  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, [originalQuestion, selectedCategory, isFinished]);

  useEffect(() => {
    if (
      language !== "es" ||
      !originalQuestion ||
      isFinished ||
      cachedTranslation
    ) {
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
    language === "es" &&
    Boolean(originalQuestion) &&
    !isFinished &&
    !activeTranslation &&
    !activeError;

  function restartQuiz() {
    window.speechSynthesis?.cancel();
    setAnswerHistory({});
    setQuestionIndex(0);
    setIsFinished(false);
    setTranslationError(null);
    setTranslationAttempt((previous) => previous + 1);
  }

  function changeCategory(event) {
    setSelectedCategory(event.target.value);
    restartQuiz();
  }

  function selectAnswer(index) {
    setAnswerHistory((previous) => {
      const saved = previous[questionIndex] ?? EMPTY_ANSWER;
      if (saved.isChecked) return previous;

      return {
        ...previous,
        [questionIndex]: { ...saved, selectedAnswer: index },
      };
    });
  }

  function updateCodeAnswer(index, value) {
    setAnswerHistory((previous) => {
      const saved = previous[questionIndex] ?? EMPTY_ANSWER;
      if (saved.isChecked) return previous;

      const nextCodeAnswers = [...saved.codeAnswers];
      nextCodeAnswers[index] = value;

      return {
        ...previous,
        [questionIndex]: { ...saved, codeAnswers: nextCodeAnswers },
      };
    });
  }

  function checkAnswer() {
    if (!originalQuestion || !canCheck || isChecked || isFinished) return;

    setAnswerHistory((previous) => {
      const saved = previous[questionIndex] ?? EMPTY_ANSWER;
      if (saved.isChecked) return previous;

      return {
        ...previous,
        [questionIndex]: {
          ...saved,
          isChecked: true,
          isCorrect,
        },
      };
    });
  }

  function goToQuestion(index) {
    if (index < 0 || index >= totalQuestions) return;

    window.speechSynthesis?.cancel();
    setQuestionIndex(index);
    setIsFinished(false);
    setTranslationError(null);
    setTranslationAttempt((previous) => previous + 1);
  }

  function previousQuestion() {
    goToQuestion(questionIndex - 1);
  }

  function nextQuestion() {
    if (isFinished || !originalQuestion) return;

    if (questionIndex === totalQuestions - 1) {
      window.speechSynthesis?.cancel();
      setIsFinished(true);
      return;
    }

    goToQuestion(questionIndex + 1);
  }

  function listenToQuestion() {
    const text = originalQuestion?.question?.trim();
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
    setTranslationError(null);
    setLanguage((previous) => (previous === "en" ? "es" : "en"));
  }

  function retryTranslation() {
    setTranslationError(null);
    setTranslationAttempt((previous) => previous + 1);
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
              const count = questions.filter(
                (item) => item.category === category
              ).length;

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
            <h2 style={{ color: "#000000", fontWeight: 800 }}>
              Practice results
            </h2>

            <span style={styles.category}>{selectedCategory}</span>

            <p
              style={{
                color: "#6957e8",
                fontSize: 48,
                fontWeight: 800,
                margin: "24px 0",
              }}
            >
              {percentage}%
            </p>

            <p style={styles.muted}>
              You answered {score} out of {totalQuestions} questions correctly.
            </p>

            <p style={styles.muted}>
              Checked: {answeredQuestions}. Pending: {pendingQuestions}.
            </p>

            <div style={styles.footer}>
              <button
                type="button"
                style={styles.button}
                onClick={() => goToQuestion(questionIndex)}
              >
                ← Volver a las preguntas
              </button>

              <button
                type="button"
                style={styles.button}
                onClick={restartQuiz}
              >
                Practice again
              </button>
            </div>
          </div>
        ) : (
          <>
            <div style={styles.stats}>
              <span>
                Question {questionIndex + 1} of {totalQuestions}
              </span>
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
                <span style={styles.category}>
                  {originalQuestion.category}
                </span>
              )}

              <div style={styles.actions}>
                <button
                  type="button"
                  style={styles.button}
                  onClick={toggleTranslation}
                  lang={language === "en" ? "es" : "en"}
                >
                  {language === "en"
                    ? "Traducir al español"
                    : "Show in English"}
                </button>

                <button
                  type="button"
                  style={styles.button}
                  onClick={listenToQuestion}
                  lang="es"
                >
                  🔊 Escuchar en inglés
                </button>
              </div>
            </div>

            {isTranslating && (
              <p role="status" lang="es" style={styles.muted}>
                Traduciendo…
              </p>
            )}

            {activeError && (
              <div lang="es">
                <p role="status" style={styles.muted}>
                  No se pudo traducir la pregunta. {activeError.message}
                </p>

                <button
                  type="button"
                  style={styles.button}
                  onClick={retryTranslation}
                >
                  Reintentar
                </button>
              </div>
            )}

            <h2
              id="question-title"
              lang={displayedLanguage}
              style={styles.question}
            >
              {displayedQuestion.question}
            </h2>

            {originalQuestion.code && (
              <pre style={styles.code}>
                <code>{originalQuestion.code}</code>
              </pre>
            )}

            {isCodeExercise ? (
              <CodeExercise
                key={`${selectedCategory}-${questionIndex}`}
                question={originalQuestion}
                codeAnswers={codeAnswers}
                isChecked={isChecked}
                codeResults={codeResults}
                onAnswerChange={updateCodeAnswer}
              />
            ) : (
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
                      onClick={() => selectAnswer(index)}
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
                        style={{
                          flex: 1,
                          minWidth: 0,
                          overflowWrap: "anywhere",
                        }}
                      >
                        {option}
                      </span>

                      {isChecked && isAnswer && (
                        <span
                          aria-label="Correct answer"
                          style={{ color: "#24965a", fontWeight: 800 }}
                        >
                          ✓
                        </span>
                      )}

                      {isChecked && isSelected && !isAnswer && (
                        <span
                          aria-label="Incorrect answer"
                          style={{ color: "#dc5151", fontWeight: 800 }}
                        >
                          ✕
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

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
                    : (isCorrect
                        ? "Correct! Well done."
                        : "Not quite. Keep learning!")}
                </strong>

                {!isCorrect && (
                  <p style={{ marginBottom: 0 }}>
                    <strong>
                      {activeTranslation
                        ? "Respuesta correcta: "
                        : "Correct answer: "}
                    </strong>

                    {isCodeExercise
                      ? originalQuestion.answers.join(" · ")
                      : displayedQuestion.options[originalQuestion.answer]}
                  </p>
                )}

                <p style={{ marginBottom: 0, whiteSpace: "pre-line" }}>
                  {displayedQuestion.explanation}
                </p>

                {isCodeExercise && (
                  <div style={{ marginTop: 20 }}>
                    <strong>
                      {activeTranslation ? "Solución" : "Solution"}
                    </strong>

                    <pre style={styles.code}>
                      <code>{solutionCode}</code>
                    </pre>

                    {originalQuestion.expectedOutput !== undefined && (
                      <>
                        <strong>
                          {activeTranslation
                            ? "Salida esperada"
                            : "Expected output"}
                        </strong>

                        <pre style={styles.code}>
                          <code>{originalQuestion.expectedOutput}</code>
                        </pre>
                      </>
                    )}
                  </div>
                )}

                {originalQuestion.example && (
                  <div style={{ marginTop: 20 }}>
                    <strong>
                      {activeTranslation
                        ? "Ejemplo de código"
                        : "Code example"}
                    </strong>

                    <pre style={styles.code}>
                      <code>{originalQuestion.example}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}

            <footer style={styles.footer}>
              <button
                type="button"
                disabled={questionIndex === 0}
                onClick={previousQuestion}
                style={{
                  ...styles.button,
                  ...(questionIndex === 0 ? styles.disabledButton : {}),
                }}
              >
                ← Atrás
              </button>

              {!isChecked && (
                <button
                  type="button"
                  disabled={!canCheck}
                  onClick={checkAnswer}
                  style={{
                    ...styles.button,
                    ...(!canCheck ? styles.disabledButton : {}),
                  }}
                >
                  Comprobar
                </button>
              )}

              <button
                type="button"
                onClick={nextQuestion}
                style={styles.button}
              >
                {questionIndex === totalQuestions - 1
                  ? "Ver resultados"
                  : "Siguiente →"}
              </button>
            </footer>
          </>
        )}
      </section>
    </main>
  );
}
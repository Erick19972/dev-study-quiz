import { useState } from "react";
import { angularQuestions } from "./angularQuestions";
import "./PreguntasAngular.css";

export default function PreguntasAngular() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = angularQuestions.length;
  const currentQuestion = angularQuestions[currentIndex];
  const progress = finished
    ? 100
    : ((currentIndex + (checked ? 1 : 0)) / total) * 100;

  function checkAnswer() {
    if (selectedAnswer === null || checked) return;

    if (selectedAnswer === currentQuestion.answer) {
      setScore((previous) => previous + 1);
    }

    setChecked(true);
  }

  function nextQuestion() {
    if (currentIndex === total - 1) {
      setFinished(true);
      return;
    }

    setCurrentIndex((previous) => previous + 1);
    setSelectedAnswer(null);
    setChecked(false);
  }

  function restart() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setChecked(false);
    setScore(0);
    setFinished(false);
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
          value="Angular Basic"
          onChange={() => {}}
        >
          <option value="Angular Basic">Angular Basic ({total})</option>
        </select>

        <div className="angular-status">
          <span>
            {finished
              ? "Practice completed"
              : `Question ${currentIndex + 1} of ${total}`}
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

            <button className="angular-primary" onClick={restart}>
              Practice again
            </button>
          </div>
        ) : (
          <>
            <span className="angular-badge">
              {currentQuestion.category}
            </span>

            <h2 className="angular-question">
              {currentQuestion.question}
            </h2>

            <div className="angular-options">
              {currentQuestion.options.map((option, index) => {
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
                    <span>{option}</span>
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
                <div className="angular-feedback" aria-live="polite">
                  <h3
                    className={
                      selectedAnswer === currentQuestion.answer
                        ? "angular-correct-text"
                        : "angular-incorrect-text"
                    }
                  >
                    {selectedAnswer === currentQuestion.answer
                      ? "✓ Correct!"
                      : "✕ Incorrect"}
                  </h3>

                  <p>{currentQuestion.explanation}</p>

                  {currentQuestion.code && (
                    <>
                      <h4>Code example</h4>

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
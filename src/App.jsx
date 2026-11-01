import { useState } from "react";
import PreguntasJava from "./PreguntasJava";
import PreguntasAngular from "./PreguntasAngular";

export default function App() {
  const [technology, setTechnology] = useState(null);

  function backToMenu() {
    setTechnology(null);
  }

  if (technology === "java") {
    return <PreguntasJava onBack={backToMenu} />;
  }

  if (technology === "angular") {
    return <PreguntasAngular onBack={backToMenu} />;
  }

  return (
    <main style={styles.page}>
      <section style={styles.menu}>
        <span style={styles.badge}>Your study space</span>

        <h1 style={styles.title}>Choose your practice</h1>

        <p style={styles.description}>
          Which technology would you like to practice?
        </p>

        <div style={styles.options}>
          <button
            type="button"
            onClick={() => setTechnology("java")}
            style={{
              ...styles.card,
              backgroundColor: "#fff7ed",
            }}
          >
            <span style={styles.icon} aria-hidden="true">
              ☕
            </span>

            <strong style={styles.name}>Java</strong>

            <span style={styles.detail}>
              Java, OOP, Spring Boot, and more
            </span>

            <span style={styles.link}>Start practicing →</span>
          </button>

          <button
            type="button"
            onClick={() => setTechnology("angular")}
            style={{
              ...styles.card,
              backgroundColor: "#fff1f2",
            }}
          >
            <span style={styles.icon} aria-hidden="true">
              🅰️
            </span>

            <strong style={styles.name}>Angular</strong>

            <span style={styles.detail}>
              Components, services, templates, and more
            </span>

            <span style={styles.link}>Start practicing →</span>
          </button>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    backgroundColor: "#f5f4ff",
    fontFamily: "Arial, sans-serif",
    color: "#18213b",
  },

  menu: {
    width: "100%",
    maxWidth: 900,
    minWidth: 0,
    textAlign: "center",
  },

  badge: {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: 30,
    backgroundColor: "#ebe8ff",
    color: "#6554e8",
    fontSize: 14,
    fontWeight: 700,
  },

  title: {
    fontSize: "clamp(28px, 5vw, 42px)",
    lineHeight: 1.2,
    color: "#111827",
    margin: "24px 0 12px",
  },

  description: {
    fontSize: 18,
    lineHeight: 1.6,
    color: "#64748b",
    margin: "0 0 36px",
  },

  options: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
    gap: 24,
  },

  card: {
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 32,
    border: "1px solid #e2e8f0",
    borderRadius: 24,
    cursor: "pointer",
    fontFamily: "inherit",
    textAlign: "center",
    color: "#18213b",
    boxShadow: "0 8px 24px rgba(24, 33, 59, 0.06)",
  },

  icon: {
    fontSize: 48,
    marginBottom: 20,
  },

  name: {
    fontSize: 30,
    marginBottom: 12,
  },

  detail: {
    fontSize: 16,
    lineHeight: 1.6,
    color: "#475569",
    marginBottom: 24,
  },

  link: {
    marginTop: "auto",
    color: "#6554e8",
    fontWeight: 700,
    fontSize: 16,
  },
};
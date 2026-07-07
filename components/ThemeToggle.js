"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

const THEMES = ["violet", "cyan", "amber"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState("violet");

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem("portfolio-theme");
    } catch (e) {
      stored = null;
    }
    if (stored && THEMES.includes(stored)) {
      applyTheme(stored);
      setTheme(stored);
    }
  }, []);

  function applyTheme(next) {
    if (next === "violet") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", next);
    }
  }

  const cycleTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const next = THEMES[(currentIndex + 1) % THEMES.length];
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch (e) {
      /* ignore storage errors */
    }
  };

  return (
    <button
      className={styles.toggleBtn}
      onClick={cycleTheme}
      aria-label="Change accent color theme"
      title="Change accent color"
    >
      <span className={styles.swatch} />
    </button>
  );
}

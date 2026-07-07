"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function TypingText({ text, speed = 80 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={styles.highlight}>
      {displayed}
      <span className={styles.cursor}>|</span>
    </span>
  );
}

"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFading(true), 1000);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = previousOverflow;
    }, 1450);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${fading ? styles.fadeOut : ""}`}>
      <div className={styles.ring} />
      <p className={styles.brand}>{"</RANA>"}</p>
    </div>
  );
}

"use client";

import { useRef } from "react";
import styles from "./Magnetic.module.css";

export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!isFinePointer) return;

    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    el.style.transition = "transform 0.15s ease-out";
    el.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      className={`${styles.magnetic} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

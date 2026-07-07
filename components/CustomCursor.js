"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("cursor-active");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame;

    const HOVER_SELECTOR =
      "a, button, input, textarea, select, [role='button'], .cursor-hover";

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const onMouseOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) {
        ring.classList.add(styles.ringHover);
        dot.classList.add(styles.dotHover);
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) {
        ring.classList.remove(styles.ringHover);
        dot.classList.remove(styles.dotHover);
      }
    };

    const onMouseDown = () => ring.classList.add(styles.ringClick);
    const onMouseUp = () => ring.classList.remove(styles.ringClick);

    const onDocLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onDocEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animateRing);
    }

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onDocLeave);
    document.addEventListener("mouseenter", onDocEnter);

    animateRing();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onDocLeave);
      document.removeEventListener("mouseenter", onDocEnter);
      document.body.classList.remove("cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}

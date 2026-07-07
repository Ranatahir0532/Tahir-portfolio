"use client";

import { useEffect, useRef } from "react";

export default function IntroParticles({
  targetSelector = "#avatar-target",
  imageSrc = "/avatar-rect.png",
  duration = 1400,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targetEl = document.querySelector(targetSelector);
    const wrapEl = document.querySelector("[data-avatar-wrap]");

    if (prefersReducedMotion) {
      if (wrapEl) wrapEl.style.opacity = "1";
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas || !targetEl) {
      if (wrapEl) wrapEl.style.opacity = "1";
      return;
    }

    const ctx = canvas.getContext("2d");
    let animationFrame;
    let particles = [];
    let startTime = null;
    let stopped = false;

    // Cap device pixel ratio so very high-DPI screens don't force
    // an oversized canvas (a big source of the reload jank).
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    function resizeCanvas() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resizeCanvas();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      const rect = targetEl.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const originX = rect.left;
      const originY = rect.top;

      // Keep the sample grid aspect-matched to the target so the
      // image doesn't distort, but cap total particle count for speed.
      const cols = 48;
      const rows = Math.max(1, Math.round(cols * (height / width)));

      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const offCtx = off.getContext("2d", { willReadFrequently: true });
      offCtx.drawImage(img, 0, 0, cols, rows);

      let data;
      try {
        data = offCtx.getImageData(0, 0, cols, rows).data;
      } catch (e) {
        if (wrapEl) wrapEl.style.opacity = "1";
        return;
      }

      const stepX = width / cols;
      const stepY = height / rows;
      const particleSize = Math.max(2, Math.max(stepX, stepY) * 1.05);
      const settleWindow = 350;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = (y * cols + x) * 4;
          const alpha = data[idx + 3];
          if (alpha < 100) continue;

          const targetX = originX + x * stepX;
          const targetY = originY + y * stepY;

          const angle = Math.random() * Math.PI * 2;
          const spread =
            Math.max(window.innerWidth, window.innerHeight) *
            (0.55 + Math.random() * 0.6);
          const startX = originX + width / 2 + Math.cos(angle) * spread;
          const startY = originY + height / 2 + Math.sin(angle) * spread;

          particles.push({
            startX,
            startY,
            targetX,
            targetY,
            color: `rgb(${data[idx]},${data[idx + 1]},${data[idx + 2]})`,
            size: particleSize,
            delay: Math.random() * (duration - settleWindow - 150),
          });
        }
      }

      startTime = performance.now();
      animationFrame = requestAnimationFrame(animate);
    };

    function animate(now) {
      if (stopped) return;
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      let allDone = true;
      const localDuration = 480;

      for (const p of particles) {
        const t = (elapsed - p.delay) / localDuration;

        if (t <= 0) {
          allDone = false;
          continue;
        }

        const clamped = t < 1 ? t : 1;
        if (clamped < 1) allDone = false;

        const eased = easeOutCubic(clamped);
        const x = p.startX + (p.targetX - p.startX) * eased;
        const y = p.startY + (p.targetY - p.startY) * eased;
        const fadeIn = clamped * 2.5 < 1 ? clamped * 2.5 : 1;

        ctx.globalAlpha = fadeIn;
        ctx.fillStyle = p.color;
        ctx.fillRect(x - p.size / 2, y - p.size / 2, p.size, p.size);
      }

      ctx.globalAlpha = 1;

      if (!allDone) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        finish();
      }
    }

    function finish() {
      stopped = true;
      canvas.style.transition = "opacity 0.45s ease";
      canvas.style.opacity = "0";
      if (wrapEl) {
        wrapEl.style.transition = "opacity 0.45s ease";
        wrapEl.style.opacity = "1";
      }
      setTimeout(() => {
        canvas.style.display = "none";
      }, 470);
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      stopped = true;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [targetSelector, imageSrc, duration]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}

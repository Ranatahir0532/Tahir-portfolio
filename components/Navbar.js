"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const NAV_HEIGHT = 78;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetY, duration = 900) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  function step(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: `-${NAV_HEIGHT}px 0px -60% 0px`, threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const targetY =
      target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT + 1;

    smoothScrollTo(targetY);
    setActiveSection(href);
    setOpen(false);
  };

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={styles.inner}>
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <span className={styles.logoDot} />
          {"</RANA>"}
        </a>

        <nav className={styles.linksDesktop} aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                activeSection === link.href ? styles.linkActive : ""
              }`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.rightControls}>
          <ThemeToggle />

          <button
            className={styles.menuBtn}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`${styles.bar} ${open ? styles.barOpen1 : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen2 : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen3 : ""}`} />
          </button>
        </div>
      </div>

      <nav
        className={`${styles.linksMobile} ${open ? styles.linksMobileOpen : ""}`}
        aria-label="Mobile"
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`${styles.linkMobile} ${
              activeSection === link.href ? styles.linkMobileActive : ""
            }`}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

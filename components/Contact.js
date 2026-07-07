import styles from "./Contact.module.css";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal>
        <span className="section-label">Contact</span>
        <h2 className="section-title">
          Let's <span>connect</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className={styles.wrap}>
        <p className={styles.text}>
          Open to collaborating on projects, internships, or anything AI &
          ML related. Reach out through email or find me on:
        </p>

        <div className={styles.socials}>
          <a
            href="mailto:your.email@example.com"
            className={styles.socialBtn}
            aria-label="Email"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            Email
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="LinkedIn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="Instagram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
            </svg>
            Instagram
          </a>
        </div>
        </div>
      </Reveal>

      <footer className={styles.footer}>
        <hr className="section-divider" />
        <p className={styles.footerText}>
          Built with Next.js · © {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}

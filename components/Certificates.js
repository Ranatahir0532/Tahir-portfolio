"use client";

import { useState } from "react";
import styles from "./Certificates.module.css";
import Reveal from "./Reveal";

/*
  Add your certificates here. Each entry needs:
  - image: a preview picture of the certificate, placed in /public/certificates
  - fileUrl: the actual file (PDF or image) to open when clicked
  Add both files to /public/certificates, then add an entry below.
*/
const CERTIFICATES = [
  {
    title: "Learn Python 3 - Free Interactive Course",
    issuer: "Educative",
    date: "Jul 2026",
    image: "/certificates/learn-python-3.png",
    fileUrl: "/certificates/learn-python-3.pdf",
  },
  {
    title: "Special Mention Award — The Grand Debate 2025",
    issuer: "FAST NUCES Karachi",
    date: "Nov 2025",
    image: "/certificates/special-mention-debate.jpg",
    fileUrl: "/certificates/special-mention-debate.pdf",
  },
];

export default function Certificates() {
  const [failedImages, setFailedImages] = useState({});

  return (
    <section id="certificates" className="section">
      <div className={styles.glowBg} aria-hidden="true" />

      <Reveal>
        <span className="section-label">Certificates</span>
        <h2 className="section-title">
          Credentials & <span>achievements</span>
        </h2>
      </Reveal>

      {CERTIFICATES.length === 0 ? (
        <Reveal>
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>◆</span>
            <p className={styles.emptyText}>
              No certificates added yet — this section is ready for you to
              fill in once you have them.
            </p>
          </div>
        </Reveal>
      ) : (
        <div className={styles.grid}>
          {CERTIFICATES.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <a
                href={c.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.imageWrap}>
                  {failedImages[c.title] ? (
                    <div className={styles.imageFallback}>
                      Preview unavailable — click to open certificate
                    </div>
                  ) : (
                    <img
                      src={c.image}
                      alt={c.title}
                      className={styles.certImage}
                      onError={() =>
                        setFailedImages((prev) => ({
                          ...prev,
                          [c.title]: true,
                        }))
                      }
                    />
                  )}
                  <span className={styles.viewOverlay}>View Full Size →</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardMeta}>
                    {c.issuer} · {c.date}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

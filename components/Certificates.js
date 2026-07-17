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
];

export default function Certificates() {
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
                  <img
                    src={c.image}
                    alt={c.title}
                    className={styles.certImage}
                  />
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

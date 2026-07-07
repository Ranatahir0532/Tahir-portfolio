import styles from "./Certificates.module.css";
import Reveal from "./Reveal";

/*
  Add your certificates here. Each entry can be as simple as:
  { title: "Certificate Name", issuer: "Issuing Platform", date: "2026" }
  Once you have images, swap the placeholder icon for:
  <img src="/certificates/your-file.jpg" alt={title} className={styles.certImg} />
*/
const CERTIFICATES = [];

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
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardMeta}>
                  {c.issuer} · {c.date}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}

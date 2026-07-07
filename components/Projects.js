import styles from "./Projects.module.css";
import Reveal from "./Reveal";

const PROJECTS = [
  {
    title: "FAST Point Management System",
    term: "Semester 1",
    stack: "C",
    description:
      "A console-based system built in C to record, calculate, and manage student points/grades for the FAST point-based evaluation structure — covering structured data handling, file I/O, and modular function design.",
    tags: ["C", "File Handling", "Data Structures"],
    repoUrl: null,
  },
  {
    title: "Smart Academic Operating System",
    term: "Semester 2",
    stack: "C++ (OOP)",
    description:
      "An object-oriented academic management system built in C++, applying core OOP principles — classes, inheritance, encapsulation, and polymorphism — to simulate real academic operations like student records, courses, and results.",
    tags: ["C++", "OOP", "Class Design"],
    repoUrl: "https://github.com/Ranatahir0532/OOP-SAOS-by-rana-tahir.git",
  },
];

const PARTICLES = [
  { top: "8%", left: "12%", size: 10, duration: 13, delay: 0 },
  { top: "18%", left: "82%", size: 7, duration: 16, delay: 1.2 },
  { top: "40%", left: "6%", size: 5, duration: 11, delay: 2.5 },
  { top: "60%", left: "90%", size: 9, duration: 15, delay: 0.6 },
  { top: "75%", left: "20%", size: 6, duration: 12, delay: 3 },
  { top: "85%", left: "70%", size: 8, duration: 14, delay: 1.8 },
  { top: "30%", left: "50%", size: 5, duration: 17, delay: 2.2 },
  { top: "55%", left: "40%", size: 7, duration: 10, delay: 0.9 },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className={styles.particlesBg} aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <Reveal>
        <span className="section-label">Projects</span>
        <h2 className="section-title">
          Things I've <span>built</span>
        </h2>
      </Reveal>

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.term}>{p.term}</span>
                <span className={styles.stackTag}>{p.stack}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
              <ul className={styles.tagList}>
                {p.tags.map((t) => (
                  <li key={t} className={styles.tag}>
                    {t}
                  </li>
                ))}
              </ul>

              {p.repoUrl ? (
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repoBtn}
                >
                  View Repository →
                </a>
              ) : (
                <span className={styles.repoBtnDisabled}>
                  Repo coming soon
                </span>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import styles from "./Skills.module.css";
import Reveal from "./Reveal";

const COLUMNS = [
  {
    heading: "Languages",
    items: ["Python", "C", "C++"],
  },
  {
    heading: "AI Tools",
    items: ["Gemini", "Claude", "DeepSeek"],
  },
  {
    heading: "IDEs",
    items: ["VS Code", "PyCharm"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className={styles.gridBg} aria-hidden="true" />

      <Reveal>
        <span className="section-label">Skills</span>
        <h2 className="section-title">
          What I <span>work with</span>
        </h2>
      </Reveal>

      <div className={styles.grid}>
        {COLUMNS.map((col, i) => (
          <Reveal key={col.heading} delay={i * 100}>
            <div className={styles.column}>
              <h3 className={styles.heading}>{col.heading}</h3>
              <ul className={styles.list}>
                {col.items.map((item) => (
                  <li key={item} className={styles.item}>
                    <span className={styles.dot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

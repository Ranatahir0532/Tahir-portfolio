import styles from "./about.module.css";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <span className="section-label">About Me</span>
        <h2 className="section-title">
          Who I <span>am</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className={styles.wrap}>
          <p className={styles.paragraph}>
            I'm <strong className={styles.name}>Tahir Hussain</strong>, a
            Computer Science student at FAST NUCES, Karachi Campus. I'm
            especially drawn to{" "}
            <span className={styles.highlight}>Artificial Intelligence</span>{" "}
            and <span className={styles.highlight}>Machine Learning</span> —
            I like understanding how systems can learn from data and make
            decisions, and I'm building my foundations toward working in that
            space.
          </p>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.timelineTag}>Semester 1</span>
              <p className={styles.timelineText}>
                Learned the fundamentals — HTML, CSS, and JavaScript for the
                web, and C programming for core problem-solving and logic
                building.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.timelineTag}>Semester 2</span>
              <p className={styles.timelineText}>
                Learned Object-Oriented Programming in C++ — classes,
                inheritance, encapsulation, and polymorphism — and used it to
                build real, structured projects.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

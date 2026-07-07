import styles from "./Hero.module.css";
import TypingText from "./TypingText";
import IntroParticles from "./IntroParticles";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.glowBg} aria-hidden="true" />

      <IntroParticles imageSrc="/avatar-rect.png" />

      <div className={styles.badgeWrap} data-avatar-wrap>
        <div className={styles.strap} aria-hidden="true">
          <span className={styles.clip} />
        </div>

        <div className={styles.badgeCard}>
          <span className={styles.grommet} aria-hidden="true" />

          <div className={styles.photoArea} id="avatar-target">
            <img
              src="/avatar-rect.png"
              alt="Tahir Hussain"
              className={styles.avatarImg}
            />
          </div>

          <div className={styles.badgeInfo}>
            <p className={styles.badgeName}>Tahir Hussain</p>
            <p className={styles.badgeRole}>CS Student · AI / ML</p>
            <div className={styles.badgeDivider} />
            <p className={styles.badgeId}>FAST-NUCES · KHI</p>
          </div>
        </div>
      </div>

      <p className={styles.eyebrow}>FAST NUCES · Karachi Campus</p>
      <h1 className={styles.name}>Tahir Hussain</h1>
      <p className={styles.tagline}>
        BS Computer Science — Semester 2 · Exploring{" "}
        <TypingText text="AI & Machine Learning" />
      </p>

      <div className={styles.ctaRow}>
        <Magnetic strength={0.4}>
          <a href="#projects" className={styles.ctaPrimary}>
            View Projects
          </a>
        </Magnetic>
        <Magnetic strength={0.4}>
          <a href="#contact" className={styles.ctaSecondary}>
            Get In Touch
          </a>
        </Magnetic>
      </div>
    </section>
  );
}

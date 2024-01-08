import HeroImage from "@componentUtils/HeroImage";
import styles from "@styles/hero.module.scss";

export default function Hero() {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.heroType}>
        <h1>I'm Youssef Ahmed</h1>
        <h2>
          A Professional Web <br /> Developer
        </h2>
        <p>
          I design and develop websites that are visually appealing,
          user-friendly, and optimized for performance.
        </p>
        <div className={styles.buttonsContainer}>
          <a className={styles.main} href="#work" tabIndex={0}>
            View My Work
          </a>
          <button className={styles.secondary}>Download CV</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <span className={styles.imageBackground}>
          <HeroImage />
        </span>
      </div>
    </section>
  );
}

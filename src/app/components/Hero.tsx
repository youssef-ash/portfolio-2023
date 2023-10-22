import styles from "@styles/hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.heroType}>
        <h1>I'm Youssef Ahmed</h1>
        <h2>
          A Professional Web <br /> Developer
        </h2>
        <p>
          I design and develop websites that are visually <br /> appealing,
          user-friendly, and optimized for <br />
          performance.
        </p>
        <div className={styles.buttonsContainer}>
          <button className={styles.main}>View My Work</button>
          <button className={styles.secondary}>Download CV</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <span className={styles.imageBackground}>
          <Image
            src={"/images/avatar.png"}
            alt="Avatar of Youssef"
            width={200}
            height={200}
            layout="responsive"
          />
        </span>
      </div>
    </section>
  );
}

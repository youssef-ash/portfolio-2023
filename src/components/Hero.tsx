import { motion } from "framer-motion";

import HeroImage from "@componentUtils/HeroImage";
import styles from "@styles/hero.module.scss";

export default function Hero() {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.heroType}>
        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            ease: "easeInOut",
            duration: 1.8,
            delay: 0.8,
          }}
          viewport={{ once: true }}
        >
          I'm Youssef Ahmed
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            ease: "easeInOut",
            duration: 1.8,
            delay: 1.2,
          }}
          viewport={{ once: true }}
        >
          A Professional Web <br /> Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            ease: "easeInOut",
            duration: 1.8,
            delay: 1.6,
          }}
          viewport={{ once: true }}
        >
          I design and develop websites that are visually appealing,
          user-friendly, and optimized for performance.
        </motion.p>
        <motion.div
          className={styles.buttonsContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.6,
            delay: 2,
          }}
          viewport={{ once: true }}
        >
          <a className={styles.main} href="#work" tabIndex={0}>
            View My Work
          </a>
          <button className={styles.secondary}>Download CV</button>
        </motion.div>
      </div>
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className={styles.imageBackground}>
          <HeroImage />
        </span>
      </motion.div>
    </section>
  );
}

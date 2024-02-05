import { motion } from "framer-motion";

import HeroImage from "@componentUtils/HeroImage";
import styles from "@styles/hero.module.scss";

const textContainer = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.4,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className={styles.container}>
      <motion.div
        className={styles.heroType}
        variants={textContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 variants={textVariants}>I&apos;m Youssef Ahmed</motion.h1>
        <motion.h2 variants={textVariants}>
          A Professional Web <br /> Developer
        </motion.h2>
        <motion.p variants={textVariants}>
          I design and develop websites that are visually appealing,
          user-friendly, and optimized for performance.
        </motion.p>
        <motion.div
          className={styles.buttonsContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 2.1,
          }}
          viewport={{ once: true }}
        >
          <a className={styles.main} href="#work">
            View My Work
          </a>
          <a
            className={styles.secondary}
            href="/Youssef_Ahmed_Resume.pdf"
            download="Youssef_Ahmed_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
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

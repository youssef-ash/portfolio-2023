import { useRef } from "react";
import { Variants, motion, useInView } from "framer-motion";

import SectionTitle from "@componentUtils/SectionTitle";
import Skill from "@componentUtils/Skill";
import styles from "@styles/about.module.scss";

const skillsContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 1.2,
      staggerChildren: 0.1,
    },
  },
};

const skillVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "SASS",
    "Tailwind",
    "Node.js",
    "PostgreSQL",
    "Git",
  ].map((skill) => (
    <Skill
      key={skill}
      imageSrc={`/skillsIcons/${skill.toLowerCase().replace(".", "")}.svg`}
      name={skill}
      skillVariant={skillVariant}
    />
  ));

  return (
    <section id="about" className={styles.container}>
      <div className={styles.content} ref={ref}>
        <SectionTitle
          className={styles.title}
          text="About Me"
          inView={inView}
        />

        <motion.div className={styles.typeContainer}>
          <motion.div
            className={styles.typeWrapper}
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
          ></motion.div>
          <div className={styles.dottedSectionContainer}>
            <motion.span
              className={styles.dot}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.25, delay: 0.46 }}
            ></motion.span>
            <motion.p
              initial={{ opacity: 0, x: -13 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -13 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.46,
              }}
            >
              Hello, my name is Youssef and I&apos;m from Egypt. I love the
              process of turning ideas into reality through web development and
              watching them come to life on the internet. As a freelancer,
              I&apos;ve had the opportunity to work with a variety of clients
              and projects, and I&apos;ve gained valuable experience in the
              industry. I&apos;m now looking to take my skills to the next level
              and transition to a full-time role as a Front-End developer.
            </motion.p>
          </div>

          <div className={styles.dottedSectionContainer}>
            <motion.span
              className={styles.dot}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.25, delay: 0.75 }}
            ></motion.span>
            <motion.p
              initial={{ opacity: 0, x: -13 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -13 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.78,
              }}
            >
              Feel free to check out my <a href="#work">Work</a>. I&apos;m
              always looking for new projects to tackle and challenges to
              overcome, and if you&apos;re interested in hiring me, have a
              project in mind or just want to say hello, please don&apos;t
              hesitate to contact me through email or other means, you&apos;ll
              find my contact info in the <a href="#contact">Contact section</a>
              . Thank you for taking the time to learn a little bit about me,
              and I&apos;m looking forward to connecting with you soon.
            </motion.p>
          </div>
          <div className={styles.dottedSectionContainer}>
            <motion.span
              className={styles.dot}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.25, delay: 1.3 }}
            ></motion.span>
            <motion.h3
              className={styles.subTitle}
              initial={{ opacity: 0, x: -13 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -13 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 1.3,
              }}
            >
              My Skills
            </motion.h3>
          </div>
        </motion.div>
        <motion.div
          className={styles.skillsContainer}
          variants={skillsContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          viewport={{ once: true, amount: 0.15 }}
        >
          {skills}
        </motion.div>
      </div>
    </section>
  );
}

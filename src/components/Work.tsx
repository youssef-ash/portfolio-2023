import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import SectionTitle from "@componentUtils/SectionTitle";
import Project from "@componentUtils/Project";
import Image from "/public/images/nile_visits/nile_visits1.png";
import styles from "@styles/work.module.scss";

const projectVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 75 },
  },
};

const MotionProject = motion(Project);

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="work" className={styles.container} ref={ref}>
      <SectionTitle
        className={styles.title}
        text="My Work"
        inView={inView}
        delay={2.1}
      />

      <motion.div
        className={styles.projects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.6 }}
      >
        <MotionProject
          imagePlacement="right"
          title="Nile Orientations App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          liveLink=""
          githubLink=""
          imageSrc={Image}
          variants={projectVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        />
        <MotionProject
          imagePlacement="left"
          title="Nile Visits App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          liveLink=""
          githubLink=""
          imageSrc={Image}
          variants={projectVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        />
        <MotionProject
          imagePlacement="right"
          title="Online Veterinary Clinic"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          liveLink=""
          githubLink=""
          imageSrc={Image}
          variants={projectVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        />
        <MotionProject
          imagePlacement="left"
          title="My Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          liveLink=""
          githubLink=""
          imageSrc={Image}
          variants={projectVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        />
        <MotionProject
          imagePlacement="right"
          title="Trivia App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          liveLink=""
          githubLink=""
          imageSrc={Image}
          variants={projectVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        />
      </motion.div>
    </section>
  );
}

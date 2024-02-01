import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

import SectionTitle from "@componentUtils/SectionTitle";
import Project from "@componentUtils/Project";
import Data from "@utils/projectData";
import styles from "@styles/work.module.scss";
import Gallery from "@componentUtils/Gallery";
import { StaticImageData } from "next/image";

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
  const [selected, setSelected] = useState<StaticImageData[] | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const changeSelected = (images: StaticImageData[]) => {
    setSelected(images);
  };

  const projects = Data.map((project, i) => {
    return (
      <MotionProject
        key={project.id}
        images={project.images}
        imagePlacement={i % 2 === 0 ? "right" : "left"}
        title={project.title}
        description={project.description}
        liveLink={project.liveLink}
        githubLink={project.githubLink}
        changeSelected={changeSelected}
        variants={projectVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: i === 0 ? 0.1 : 0.35 }}
      />
    );
  });

  return (
    <section id="work" className={styles.container} ref={ref}>
      <SectionTitle
        className={styles.title}
        text="My Work"
        inView={inView}
        delay={2}
      />

      <motion.div
        className={styles.projects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.4 }}
      >
        {projects}
      </motion.div>
      <AnimatePresence>
        {selected && <Gallery images={selected} setSelected={setSelected} />}
      </AnimatePresence>
    </section>
  );
}

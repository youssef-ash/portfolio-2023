import { ProjectImagePlacementT } from "@utils/types";
import Image, { StaticImageData } from "next/image";
import styles from "@styles/work.module.scss";
import { Ref, forwardRef, useState } from "react";
import { FaImages } from "react-icons/fa6";
import { motion } from "framer-motion";

interface ProjectProps {
  images: StaticImageData[];
  imagePlacement: ProjectImagePlacementT;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  changeSelected: (images: StaticImageData[]) => void;
}

const Project = forwardRef(
  (
    {
      images,
      imagePlacement,
      title,
      description,
      liveLink,
      githubLink,
      changeSelected,
    }: ProjectProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        className={`${styles.project} ${
          imagePlacement === "left" ? styles.flipped : ""
        } `}
        ref={ref}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <span className={styles.type}>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className={styles.buttonsContainer}>
            <button className={styles.liveButton} disabled={liveLink === ""}>
              Live Site
            </button>
            <button
              className={styles.githubButton}
              disabled={githubLink === ""}
            >
              Code
            </button>
          </div>
        </span>
        <span
          className={styles.imgContainer}
          onClick={() => changeSelected(images)}
        >
          {isHovered && (
            <motion.span
              className={styles.icon}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <FaImages size="1.65rem" />
            </motion.span>
          )}
          <Image
            src={images[0]}
            alt="project image"
            fill={true}
            sizes=""
            draggable={false}
          />
        </span>
      </motion.div>
    );
  }
);

export default Project;

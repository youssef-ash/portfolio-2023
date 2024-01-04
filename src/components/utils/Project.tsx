import styles from "@styles/work.module.scss";

import { ProjectImagePlacementT } from "../../utils/types";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  imagePlacement: ProjectImagePlacementT;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  imageSrc: StaticImageData;
}

export default function Project({
  imagePlacement,
  title,
  description,
  liveLink,
  githubLink,
  imageSrc,
}: ProjectProps) {
  return (
    <div
      className={`${styles.project} ${
        imagePlacement === "left" ? styles.flipped : ""
      } `}
    >
      <span className={styles.type}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.buttonsContainer}>
          <button className={styles.liveButton} disabled={liveLink === ""}>
            Live Site
          </button>
          <button className={styles.githubButton} disabled={githubLink === ""}>
            Code
          </button>
        </div>
      </span>
      <span className={styles.imgContainer}>
        <Image
          src={imageSrc}
          alt="project image"
          fill={true}
          sizes=""
          draggable={false}
        />
      </span>
    </div>
  );
}

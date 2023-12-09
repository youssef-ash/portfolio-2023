import styles from "@styles/work.module.scss";
import Project from "./utils/Project";

import Image from "/public/images/nile_visits/nile_visits1.png";

export default function Work() {
  return (
    <section id="work" className={styles.container}>
      <h3 className={styles.title}>My Work</h3>

      <div className={styles.projects}>
        <Project
          imagePlacement="right"
          title="Nile Visits App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          liveLink=""
          githubLink=""
          imageSrc={Image}
        />
        <Project
          imagePlacement="left"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          liveLink=""
          githubLink=""
          imageSrc={Image}
        />
        <Project
          imagePlacement="right"
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          liveLink=""
          githubLink=""
          imageSrc={Image}
        />
      </div>
    </section>
  );
}

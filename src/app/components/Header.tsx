import styles from "@styles/header.module.scss";

import { BsSunFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.themeButton}>
          <BsSunFill size={"1.5em"} />
        </button>
        <nav>
          <ul className={styles.list}>
            <a href={"#home"}>Home</a>
            <a href={"#work"}>Work</a>
            <a href={"/about"}>About</a>
            <a href={"/contact"}>Contact</a>
          </ul>
        </nav>
        <button className={styles.ctaButton}>Hire Me</button>
      </div>
    </header>
  );
}

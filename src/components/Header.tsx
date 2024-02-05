import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

import { HeaderProps } from "@utils/types";
import styles from "@styles/header.module.scss";

export default function Header({ theme, setTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button
          className={styles.themeButton}
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          {theme === "light" ? (
            <BsFillMoonFill size={"1.5em"} />
          ) : (
            <BsSunFill size={"1.5em"} />
          )}
        </button>
        <nav>
          <ul className={styles.list}>
            <a href={"#home"}>Home</a>
            <a href={"#work"}>Work</a>
            <a href={"#about"}>About</a>
            <a href={"#contact"}>Contact</a>
          </ul>
        </nav>
      </div>
    </header>
  );
}

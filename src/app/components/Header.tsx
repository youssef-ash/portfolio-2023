import "@styles/globals.scss";
import styles from "@styles/header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.themeButton}>Theme Switcher</button>
      <nav>
        <ul className={styles.list}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/work"}>Work</Link>
          <Link href={"/contact"}>Contact</Link>
        </ul>
      </nav>
      <button className={styles.ctaButton}>Hire Me</button>
    </header>
  );
}

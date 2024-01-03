import {
  FaPaperPlane,
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaGithub,
} from "react-icons/fa6";
import styles from "@styles/contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.container}>
      {" "}
      <h3 className={styles.title}>Contact Me</h3>
      <div className={styles.subContainer}>
        <form className={styles.form}>
          <div className={styles.fieldGroup}>
            <div className={styles.field}>
              <label htmlFor="name">Your name:</label>
              <input id="name"></input>
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Your email:</label>
              <input id="email"></input>
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Your message:</label>
            <textarea id="message"></textarea>
          </div>

          <button>
            <FaPaperPlane />
            Send
          </button>
        </form>

        <div className={styles.linksContainer}>
          <div className={styles.link}>
            <FaEnvelope size={"1.3em"} />
            youssefashwal@outlook.com
          </div>
          <div className={styles.separator}>OR</div>

          <div className={styles.linksGroup}>
            <div className={styles.link}>
              <FaLinkedin size={"1.3em"} />
              My Linkedin
            </div>
            <div className={styles.link}>
              <FaPhone size={"1.2em"} />
              01111162356
            </div>
            <div className={styles.link}>
              <FaGithub size={"1.3em"} />
              My Github
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

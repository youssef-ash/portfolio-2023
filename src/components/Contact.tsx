import { useState } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaGithub,
} from "react-icons/fa6";
import styles from "@styles/contact.module.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  };

  const fieldsFilled =
    name.trim() !== "" && validateEmail(email) && message.trim() !== "";

  return (
    <section id="contact" className={styles.container}>
      <h3 className={styles.title}>Contact Me</h3>
      <div className={styles.subContainer}>
        <form className={styles.form}>
          <div className={styles.fieldGroup}>
            <div className={styles.field}>
              <label htmlFor="name">Your name:</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Your email:</label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Your message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button disabled={!fieldsFilled}>
            <FaPaperPlane />
            Send
          </button>
        </form>

        <div className={styles.linksContainer}>
          <a
            className={styles.link}
            href="mailto:youssefashwal@outlook.com"
            target="_blank"
          >
            <FaEnvelope size={"1.3em"} />
            youssefashwal@outlook.com
          </a>
          <div className={styles.separator}>OR</div>

          <div className={styles.linksGroup}>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/youssef-ash/"
              target="_blank"
            >
              <FaLinkedin size={"1.3em"} />
              My Linkedin
            </a>
            <div className={styles.link}>
              <FaPhone size={"1.2em"} />
              01111162356
            </div>
            <a
              className={styles.link}
              href="https://github.com/youssef-ash"
              target="_blank"
            >
              <FaGithub size={"1.3em"} />
              My Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

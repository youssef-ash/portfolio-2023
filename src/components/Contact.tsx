import { motion, useInView } from "framer-motion";

import { useState, useRef, FormEvent } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa6";

import SectionTitle from "@componentUtils/SectionTitle";
import styles from "@styles/contact.module.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const validateEmail = (email: string) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  };

  const fieldsFilled =
    name.trim() !== "" && validateEmail(email) && message.trim() !== "";

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className={styles.container}>
      <div className={styles.content} ref={ref}>
        <SectionTitle
          className={styles.title}
          text="Contact Me"
          inView={inView}
        />
        <motion.div
          className={styles.subContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{
            type: "spring",
            bounce: 0.3,
            duration: 0.7,
            delay: 0.3,
          }}
        >
          <motion.form className={styles.form}>
            <div className={styles.fieldGroup}>
              <motion.div
                className={styles.field}
                initial={{ opacity: 0, y: -15 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.5,
                  delay: 0.6,
                }}
              >
                <label htmlFor="name">Your name:</label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </motion.div>
              <motion.div
                className={styles.field}
                initial={{ opacity: 0, y: -15 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.5,
                  delay: 0.6,
                }}
              >
                <label htmlFor="email">Your email:</label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </motion.div>
            </div>
            <motion.div
              className={styles.field}
              initial={{ opacity: 0, y: -15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 1.5,
                delay: 0.9,
              }}
            >
              <label htmlFor="message">Your message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </motion.div>

            <motion.button
              onClick={handleSubmit}
              disabled={!fieldsFilled}
              initial={{ opacity: 0, y: -15 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 1.5,
                delay: 1.2,
              }}
            >
              <FaPaperPlane />
              Send
            </motion.button>
          </motion.form>

          <motion.div
            className={styles.linksContainer}
            initial={{ opacity: 0, y: -15 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
              delay: 1.5,
            }}
          >
            <span className={styles.link}>
              <FaEnvelope size={"1.2em"} />
              <a href="mailto:youssefashwal@outlook.com" target="_blank">
                youssefashwal@outlook.com
              </a>
            </span>

            <div className={styles.separator}>OR</div>

            <div className={styles.linksGroup}>
              <span className={styles.link}>
                <FaLinkedin size={"1.3em"} />
                <a
                  href="https://www.linkedin.com/in/youssef-ash/"
                  target="_blank"
                >
                  My LinkedIn
                </a>
              </span>
              <span className={styles.link}>
                <FaWhatsapp size={"1.4em"} />
                <a href="" target="_blank">
                  My Whatsapp
                </a>
              </span>
              <span className={styles.link}>
                <FaGithub size={"1.3em"} />
                <a href="https://github.com/youssef-ash" target="_blank">
                  My Github
                </a>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

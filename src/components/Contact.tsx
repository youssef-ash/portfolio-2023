import { useState, useRef, FormEvent } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

import SectionTitle from "@componentUtils/SectionTitle";
import styles from "@styles/contact.module.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
  });

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
            stiffness: 95,
            delay: 0.3,
          }}
        >
          <motion.form className={styles.form}>
            <div className={styles.fieldGroup}>
              <motion.div
                className={styles.field}
                initial={{ opacity: 0, y: -17 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -17 }}
                transition={{
                  duration: 0.38,
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
                initial={{ opacity: 0, y: -17 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -17 }}
                transition={{
                  duration: 0.38,
                  delay: 0.6,
                }}
              >
                <label htmlFor="email">Your email:</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </motion.div>
            </div>
            <motion.div
              className={styles.field}
              initial={{ opacity: 0, y: -17 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -17 }}
              transition={{
                duration: 0.38,
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
              initial={{ opacity: 0, y: -17 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -17 }}
              transition={{
                duration: 0.38,
                delay: 1.2,
              }}
            >
              <FaPaperPlane />
              Send
            </motion.button>
          </motion.form>

          <motion.div
            className={styles.linksContainer}
            initial={{ opacity: 0, y: -17 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -17 }}
            transition={{
              duration: 0.38,
              delay: 1.5,
            }}
          >
            <a
              className={styles.link}
              href="mailto:youssefashwal@outlook.com"
              target="_blank"
            >
              <FaEnvelope size={"1.2em"} />
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
                My LinkedIn
              </a>
              <a
                className={styles.link}
                href="https://wa.me/2001111162356"
                target="_blank"
              >
                <FaWhatsapp size={"1.4em"} />
                My Whatsapp
              </a>
              <a
                className={styles.link}
                href="https://github.com/youssef-ash"
                target="_blank"
              >
                <FaGithub size={"1.3em"} />
                My Github
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.img
      src={"/images/avatar.png"}
      alt="Avatar of Youssef"
      draggable={false}
      initial={{ opacity: 0, y: "7em" }}
      whileInView={{ opacity: 1, y: "1.72em" }}
      transition={{
        type: "spring",
        bounce: 0.35,
        duration: 2.2,
        delay: 1,
        opacity: { duration: 0.8, delay: 1 },
      }}
      viewport={{ once: true }}
    />
  );
}

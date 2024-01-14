import { motion } from "framer-motion";

interface SectionTitleProps {
  className: string;
  text: string;
}

export default function SectionTitle({ className, text }: SectionTitleProps) {
  return (
    <motion.h3
      className={className}
      initial={{ opacity: 0, y: "-1.5em" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.7 }}
    >
      {text}
    </motion.h3>
  );
}

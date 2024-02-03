import { motion } from "framer-motion";

interface SectionTitleProps {
  className: string;
  text: string;
  inView: boolean;
  delay?: number;
}

export default function SectionTitle({
  className,
  text,
  inView,
  delay = 0,
}: SectionTitleProps) {
  return (
    <motion.h3
      className={className}
      initial={{ opacity: 0, y: -30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ ease: "easeInOut", duration: 0.7, delay: delay }}
    >
      {text}
    </motion.h3>
  );
}

import Image from "next/image";
import { Variants, motion } from "framer-motion";

interface SkillProps {
  imageSrc: string;
  name: string;
  skillVariant: Variants;
}

export default function Skill({ imageSrc, name, skillVariant }: SkillProps) {
  return (
    <motion.span variants={skillVariant}>
      <Image src={imageSrc} alt={`${name} logo`} width={0} height={0} />
      <span>{name}</span>
    </motion.span>
  );
}

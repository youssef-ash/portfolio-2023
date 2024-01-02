import Image from "next/image";

interface SkillProps {
  imageSrc: string;
  name: string;
}

export default function Skill({ imageSrc, name }: SkillProps) {
  return (
    <span>
      <Image src={imageSrc} alt={`${name} logo`} width={0} height={0} />
      <span>{name}</span>
    </span>
  );
}

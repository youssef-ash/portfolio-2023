import styles from "@styles/about.module.scss";
import Skill from "@componentUtils/Skill";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "SASS",
    "PostgreSQL",
    "Git",
  ].map((skill) => (
    <Skill
      key={skill}
      imageSrc={`/skillsIcons/${skill.toLowerCase().replace(".", "")}.svg`}
      name={skill}
    />
  ));

  return (
    <section id="about" className={styles.container}>
      <h3 className={styles.title}>About Me</h3>
      <div className={styles.typeContainer}>
        <p>
          Hello, my name is Youssef and I'm from Egypt. I love the process of
          turning ideas into reality through web development and watching them
          come to life on the internet. As a freelancer, I've had the
          opportunity to work with a variety of clients and projects, and I've
          gained valuable experience in the industry. I'm now looking to take my
          skills to the next level and transition to a full-time role as a
          Front-End developer.
        </p>
        <p>
          Feel free to check out my <a href="#work">Work</a>. I'm always looking
          for new projects to tackle and challenges to overcome, and if you're
          interested in hiring me, have a project in mind or just want to say
          hello, please don't hesitate to contact me through email or other
          means, you'll find my contact info in the{" "}
          <a href="#contact">Contact section</a>. Thank you for taking the time
          to learn a little bit about me, and I'm looking forward to connecting
          with you soon.
        </p>

        <h4>My Skills</h4>
      </div>
      <div className={styles.skillsContainer}>{skills}</div>
    </section>
  );
}

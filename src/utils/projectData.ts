import { StaticImageData } from "next/image";
// import nileOrientationsImages from "@utils/projectImages/nileOrientations/nileOrientations";
import nileVisitsImages from "@utils/projectImages/nileVisits/nileVisits";
import vetClinicImages from "@utils/projectImages/vetClinic/vetClinic";
// import portfolioImages from "@utils/portfolio/portfolio";
import triviaImages from "@utils/projectImages/trivia/trivia";

type ProjectData = {
  id: number;
  images: StaticImageData[];
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
}[];

const projectData: ProjectData = [
  // {
  //   id: 1,
  //   images: nileOrientationsImages,
  //   title: "Nile Orientations App",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  //   liveLink: "",
  //   githubLink: "",
  // },
  {
    id: 2,
    images: nileVisitsImages,
    title: "Nile Visits App",
    description:
      "A React PWA used by Nile Developments to collect details of visiting clients, the collected data is used by sales representatives during consultations with the clients",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 3,
    images: vetClinicImages,
    title: "Online Veterinary Clinic",
    description:
      "A website for Online Vet Clinic built with Next.js. Offering multilingual support, and designed for ease of use, ensuring that pet owners can easily navigate and utilize its features.",
    liveLink: "https://online-vet.vercel.app/",
    githubLink: "",
  },
  // {
  //   id: 4,
  //   images: portfolioImages,
  //   title: "My Portfolio",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  //   githubLink: "",
  //   liveLink: "",
  // },
  {
    id: 5,
    images: triviaImages,
    title: "Trivia Quiz",
    description:
      "A React SPA that utilizes the Open Trivia Database API to generate trivia questions, offering users a tailored quiz experience based on their selected preferences",
    liveLink: "https://trivia-quiz-ash.netlify.app/",
    githubLink: "https://github.com/youssef-ash/trivia-app",
  },
];

export default projectData;

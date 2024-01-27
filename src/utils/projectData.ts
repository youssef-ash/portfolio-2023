import { StaticImageData } from "next/image";
import nileOrientationsImages from "@utils/projectImages/nileOrientations/nileOrientations";
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
  {
    id: 1,
    images: nileOrientationsImages,
    title: "Nile Orientations App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 2,
    images: nileVisitsImages,
    title: "Nile Visits App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 3,
    images: vetClinicImages,
    title: "Online Veterinary Clinic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
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
    title: "Trivia App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    liveLink: "",
    githubLink: "",
  },
];

export default projectData;

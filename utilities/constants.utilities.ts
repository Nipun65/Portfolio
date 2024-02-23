import angularImg from "@/public/skills/angular.png";
import typescriptImg from "@/public/skills/typescript.jpeg";
import javascriptImg from "@/public/skills/javascript.png";
import htmlImg from "@/public/skills/html.png";
import pugImg from "@/public/skills/pug.svg";
import cssImg from "@/public/skills/css.svg";
import pythonImg from "@/public/skills/python.png";
import cplusImg from "@/public/skills/c++.png";
import cImg from "@/public/skills/c.png";
import firebaseImg from "@/public/skills/firebase.png";
import jiraImg from "@/public/skills/jira.svg";
import mongodb from "@/public/skills/mongodb.webp";
import react from "@/public/skills/react.png";
import github from "@/public/skills/github.png";
import gitlab from "@/public/skills/gitlab.png";
import nextjs from "@/public/skills/nextjs.png";
import nodejs from "@/public/skills/nodejs.svg";
import vuejs from "@/public/skills/Vuejs.svg";
import tailwindcss from "@/public/skills/TailwindCSS.svg";
import materialui from "@/public/skills/materialui.svg";
import redux from "@/public/skills/redux.svg";

const EXPERIENCES = [
  {
    company: "Searce Inc",
    role: "Software Engineer",
    logo: "",
    description: [
      "As a highly valued member of an Agile team. Leveraging my extensive software development expertise, I have made significant contributions in driving improvements, playing a pivotal role in enhancing performance and achieving success. My key responsibilities have involved designing, developing, and deploying a range of features that have greatly enhanced the application’s user experience, scalability, and performance.",
      "As an individual contributor, I have successfully worked on multiple client projects, engaging in detailed discussions with clients to understand their requirements and developing features accordingly. Additionally, I have designed and built SEO-optimized websites using Next.js, ensuring they are responsive and user-friendly, delivering exceptional experiences to users.",
      "As a team member, Developed an onboarding settings feature that sends email notifications to users, a profile data history functionality for users to view their data history, and enhanced the application’s usability by updating table dimensions based on column selection. Created a common directive for the team members to display dynamic information. Implemented a chat feature for users and administrators, developed the functionality to display email using user ID, and added the capability to download attached files and handle blob objects, significantly enriching the application’s functionality and user experience. Created reusable components, optimized existing components, resolved bugs, and implemented best practices to enhance functionality and performance, resulting in a more robust, scalable, and efficient application.",
    ],
    duration: "Aug 2022 - Feb 2024",
    location: "Pune, Maharashtra",
  },
  {
    company: "Searce Inc",
    role: "Software Engineer Intern",
    logo: "",
    description: [
      "I used to manage the onboarding and offboarding process using HR software. Additionally, I demonstrated my expertise by developing multiple browser support extensions, including a LinkedIn extension that scrapes user profiles, converts the data into JSON format, and stores it in a Firebase database. Furthermore, I expanded the application’s reach and capabilities by working on Google Cloud Platform (GCP) and developing LinkedIn browser extensions.",
    ],
    duration: "Jan 2022 – Jul 2022",
    location: "Pune, Maharashtra",
  },
  {
    company: "EduCARE India NGO",
    role: "Web Developer Intern",
    logo: "",
    description: [
      "I had the privilege of designing and developing a website for Educare India, an impactful platform that effectively connects passionate volunteers with NGOs, fostering meaningful collaborations and making a positive difference in the community.",
    ],
    duration: "5th December 2019 - 31st December 2019",
    location: "Himachal Pradesh",
  },
];

const PORTFOLIO = [
  {
    name: "Ecommerce Website",
    link: "https://github.com/Nipun65/Ecommerce-Website",
    language: "NodeJS",
    description: "Ecommerce website to sell and buy products",
  },
  {
    name: "SEO NextJS",
    link: "https://github.com/Nipun65/nextjs-seo",
    language: "NextJS",
    description:
      "Character Details of 'The Office': SEO - Static HTML rendering",
  },
  {
    name: "Expense List",
    link: "https://github.com/Nipun65/ExpenseList",
    language: "ReactJS",
    description: "Webapp for tracking expenses",
  },
  {
    name: "Login Page",
    link: "https://github.com/Nipun65/LogIn-Page",
    language: "ReactJS",
    description: "Login Page Demo",
  },
  {
    name: "Todo",
    link: "https://github.com/Nipun65/Todo-Web-Application",
    language: "Angular",
    description: "A todo app :)",
  },
  {
    name: "Snake",
    link: "https://github.com/Nipun65/snake.js",
    language: "Javascript",
    description: "Snake game using Javascript",
  },
  {
    name: "Tic-tac-toe",
    link: "https://github.com/Nipun65/tictactoe",
    language: "Javascript",
    description: "Tic-tac-toe game using Javascript",
  },
  {
    name: "RandomMeme",
    link: "https://github.com/Nipun65/RandomMeme",
    language: "JavaScript",
    description: "Browser extension for generating memes",
  },
  {
    name: "Video GamesDB",
    link: "https://github.com/Nipun65/VideogameDB",
    language: "ReactJS",
    description: "Information about the games",
  },
  {
    name: "Online Car Parking Reservation",
    link: "https://github.com/Nipun65/Group5-Online_Car_Parking_Reservation_System",
    language: "JavaScript",
    description: "Website for booking online parking slot",
  },
];

const SKILLS = [
  { skill: "React", link: "https://reactjs.org", logo: react },
  { skill: "Next.js", link: "https://nextjs.org", logo: nextjs },
  { skill: "Angular", link: "https://angular.io", logo: angularImg },
  { skill: "Vue.js", link: "https://vuejs.org", logo: vuejs },
  { skill: "Redux", link: "https://redux.js.org", logo: redux },
  { skill: "Tailwind", link: "https://tailwindcss.com", logo: tailwindcss },
  { skill: "Material UI", link: "https://mui.com", logo: materialui },
  {
    skill: "Javascript",
    link: "https://javascript.info/",
    logo: javascriptImg,
  },
  {
    skill: "Typescript",
    link: "https://www.typescriptlang.org/",
    logo: typescriptImg,
  },
  {
    skill: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    logo: htmlImg,
  },
  { skill: "CSS", link: "https://www.w3schools.com/css/", logo: cssImg },
  {
    skill: "Pug",
    link: "https://pugjs.org/api/getting-started.html",
    logo: pugImg,
  },
  { skill: "Node.js", link: "https://nodejs.org/en/docs", logo: nodejs },
  { skill: "MongoDB", link: "https://www.mongodb.com/", logo: mongodb },
  {
    skill: "Firebase",
    link: "https://firebase.google.com/",
    logo: firebaseImg,
  },
  { skill: "Github", link: "https://docs.github.com/en", logo: github },
  { skill: "Gitlab", link: "https://about.gitlab.com/", logo: gitlab },
  {
    skill: "Jira",
    link: "https://www.atlassian.com/software/jira",
    logo: jiraImg,
  },
  {
    skill: "Python",
    link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
    logo: pythonImg,
  },
  {
    skill: "C++",
    link: "https://www.geeksforgeeks.org/c-plus-plus/",
    logo: cplusImg,
  },
];

export { EXPERIENCES, PORTFOLIO, SKILLS };

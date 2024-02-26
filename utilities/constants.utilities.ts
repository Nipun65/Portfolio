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
      "Developed and improved reusable components within a dynamic team, driving the <span class='highlight'>creation of multiple features.</span>",
      "Developed a frontend application with <span class='highlight'>multi-role support for viewing farmer data</span> and created a web application to <span class='highlight'>migrate Apigee services.</span>",
      "Engineered a cost-effective web application solution, <span class='highlight'>decreasing company billing costs by 30%</span> through effective management of unused Google instances.",
      "Explored navigator, mediadevices, geolocation, crypto web APIs, delved into JWT validation algorithms, and implemented <span class='highlight'>SEO-optimized static HTML rendering</span> using Next.js.",
    ],
    duration: "Aug 2022 - Feb 2024",
    location: "Pune, Maharashtra",
  },
  {
    company: "Searce Inc",
    role: "Software Engineer Intern",
    logo: "",
    description: [
      "Developed <span class='highlight'>multi-browser support</span> LinkedIn profile scraping extensions and managed existing extensions for seamless functionality.",
      "Contributed to the development of <span class='highlight'>user onboarding features</span> for the product within a team.",
      "Implemented <span class='highlight'>Google OAuth for authentication</span> and utilized Firebase Realtime Database for a chat application.",
    ],
    duration: "Jan 2022 – Jul 2022",
    location: "Pune, Maharashtra",
  },
  {
    company: "EduCARE India NGO",
    role: "Web Developer Intern",
    logo: "",
    description: [
      "Designed and developed Educare India website, <span class='highlight'>connecting volunteers with NGOs</span> for positive community impact.",
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

const EDUCATION = [
  {
    university:
      "Dhirubhai Ambani Institute of Information and Communication Technology",
    degree: "Information and Communication Technology",
    location: "Gandhinagar, Gujarat",
    duration: "2018-2022",
  },
];
export { EXPERIENCES, PORTFOLIO, SKILLS, EDUCATION };

import angularImg from "@/public/skills/angular.png";
import typescriptImg from "@/public/skills/typescript.jpeg";
import javascriptImg from "@/public/skills/javascript.png";
import htmlImg from "@/public/skills/html.png";
import pugImg from "@/public/skills/pug.svg";
import cssImg from "@/public/skills/css.svg";
import pythonImg from "@/public/skills/python.png";
import cplusImg from "@/public/skills/c++.png";
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
import ecommerce from "@/public/projects/ecommerce.png";
import office from "@/public/projects/office.png";
import login from "@/public/projects/loginpage.png";
import snake from "@/public/projects/snake.png";
import tictactoe from "@/public/projects/tictactoe.png";
import collab from "@/public/projects/collabplatform.png";
import calendartodo from "@/public/projects/calendartodo.png";
import weatherapp from "@/public/projects/weatherapp.png";

const EXPERIENCES = [
  {
    company: "Aerem Solutions Private Limited",
    role: "Software Engineer",
    logo: "",
    description: [
      "Automated <span class='highlight'>report generation</span>, <span class='highlight'>historical data fetching</span>, and <span class='highlight'>plant onboarding</span> process on the <span class='highlight'>AeROC portal</span>, improving system performance with <span class='highlight'>CronJobs</span> and implementing <span class='highlight'>RPC logic</span> for seamless component communication.",
      "Designed and implemented a module to retrieve <span class='highlight'>historical data</span> for legacy plants, <span class='highlight'>streamlining data accessibility</span> and <span class='highlight'>analysis</span>.",
      "Integrated <span class='highlight'>real-time</span> and <span class='highlight'>historical data</span> from <span class='highlight'>12 inverter brands</span>, ensuring seamless compatibility within the existing system.",
      "Developed a <span class='highlight'>web push notification</span> feature for real-time plant status updates, boosting <span class='highlight'>user engagement</span> and <span class='highlight'>system responsiveness</span>.",
      "Optimized and enhanced the existing system by implementing <span class='highlight'>multiple features</span>, resulting in improved <span class='highlight'>customer accessibility</span> and increased <span class='highlight'>operational efficiency</span>."
    ],
    duration: "June 2024 - May 2025",
    location: "Mumbai, Maharashtra",
  },
  {
    company: "Searce Inc",
    role: "Software Engineer",
    logo: "",
    description: [
      "Developed and improved reusable components within a dynamic team, driving the <span class='highlight'>creation of multiple features.</span>",
      "Developed a frontend application with <span class='highlight'>multi-role access for viewing farmer data</span> and created a web application to <span class='highlight'>migrate Apigee services.</span>",
      "Engineered a cost-effective web application solution, <span class='highlight'>significantly reducing company billing costs</span> through effective management of unused Google instances.",
      "Explored navigator, mediadevices, geolocation, crypto web APIs, delved into JWT validation algorithms, and implemented <span class='highlight'>SEO static HTML rendering</span> using Next.js.",
    ],
    duration: "Aug 2022 - Feb 2024",
    location: "Pune, Maharashtra",
  },
  {
    company: "Searce Inc",
    role: "Software Engineer Intern",
    logo: "",
    description: [
      "Developed <span class='highlight'>cross-browser compatible</span> LinkedIn profile scraping extensions and managed existing extensions for seamless functionality.",
      "Contributed to the development of <span class='highlight'>user onboarding features</span> for the product within a team.",
      "Integrated <span class='highlight'>Google OAuth for authentication</span> and utilized Firebase Realtime Database for a chat application.",
    ],
    duration: "Jan 2022 - Jul 2022",
    location: "Pune, Maharashtra",
  },
  // {
  //   company: "EduCARE India NGO",
  //   role: "Web Developer Intern",
  //   logo: "",
  //   description: [
  //     "Designed and developed Educare India website, <span class='highlight'>connecting volunteers with NGOs</span> for positive community impact.",
  //   ],
  //   duration: "5th December 2019 - 31st December 2019",
  //   location: "Himachal Pradesh",
  // }
];

const PORTFOLIO = [
  {
    name: "Collab Platform",
    link: "https://collabplatform.vercel.app/",
    language: "Next.js",
    description: "Platform, where you can post and team up with others",
    image: collab,
  },
  {
    name: "Tic-tac-toe",
    link: "https://tictactoevanila.vercel.app/",
    language: "Javascript",
    description: "Tic-tac-toe game using Javascript",
    image: tictactoe,
  },
  {
    name: "SEO NextJS",
    link: "https://seo-the-office.vercel.app/",
    language: "Next.js",
    description:
      "Character details of 'The Office': SEO - Static HTML rendering",
    image: office,
  },
  {
    name: "Ecommerce Website",
    link: "https://ecommerce-website-1-xbui.onrender.com/",
    language: "Node.js",
    description: "Ecommerce website to sell and buy products",
    image: ecommerce,
  },
  {
    name: "Weather App",
    link: "https://weather-insights.vercel.app/",
    language: "React.js",
    description: "A user-friendly weather application for forecast updates",
    image: weatherapp,
  },
  {
    name: "Snake",
    link: "https://github.com/Nipun65/snake.js",
    language: "Javascript",
    description: "Snake game using Javascript",
    image: snake,
  },
  {
    name: "Task Tracker",
    link: "https://calendar-todos.vercel.app",
    language: "React.js",
    description: "Seamlessly manage your daily agenda with the task tracker",
    image: calendartodo,
  },
  // {
  //   name: "Expense List",
  //   link: "https://github.com/Nipun65/ExpenseList",
  //   language: "React.js",
  //   description: "Webapp for tracking expenses",
  // },
  {
    name: "Todo",
    link: "https://github.com/Nipun65/Todo-Web-Application",
    language: "Angular",
    description: "A todo app :)",
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
    language: "React.js",
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
  { skill: "Node.js", link: "https://nodejs.org/en/docs", logo: nodejs },
  { skill: "MongoDB", link: "https://www.mongodb.com/", logo: mongodb },
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

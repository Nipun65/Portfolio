import styles from "./Resume.module.css";
import angularImg from "../../assets/imgData/angular.png";
import typescriptImg from "../../assets/imgData/typescript.jpeg";
import javascriptImg from "../../assets/imgData/javascript.png";
import htmlImg from "../../assets/imgData/html.png";
import pugImg from "../../assets/imgData/pug.svg";
import cssImg from "../../assets/imgData/css.png";
import pythonImg from "../../assets/imgData/python.png";
import cplusImg from "../../assets/imgData/c++.png";
import cImg from "../../assets/imgData/c.png";
import firebaseImg from "../../assets/imgData/firebase.png";
import jiraImg from "../../assets/imgData/jira.svg";
import mongodb from "../../assets/imgData/mongodb.webp";
import newTab from "../../assets/imgData/newTab.jpg";
import experience from "../../assets/imgData/experience.png";
import education from "../../assets/imgData/education.png";
import react from "../../assets/imgData/react.png";
import github from "../../assets/imgData/github.png";
import gitlab from "../../assets/imgData/gitlab.png";
import nextjs from "../../assets/imgData/nextjs.png";
import nodejs from "../../assets/imgData/nodejs.png";

const Resume = () => {
  return (
    <div className="resume sectiontoppadding" data-page="resume" id="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
        <a
          href="https://drive.google.com/file/d/1Lh-KKiJ5NOpCVsZRGoaB6fqNrX29ykjs/view?usp=drive_link"
          target="__blank">
          <img src={newTab} />
        </a>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <img src={experience} className={styles.imageClass} />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Engineer</h4>
            <span>Searce Inc</span>
            <span>Jul 2022 - Present</span>

            <div className="timeline-text">
              <ul>
                <li>
                  As a highly valued member of an Agile team. Leveraging my
                  extensive software development expertise, I have made
                  significant con- tributions in driving improvements, playing a
                  pivotal role in enhancing performance and achieving success.
                  My key responsibilities have involved designing, developing,
                  and deploying a range of features that have greatly enhanced
                  the application’s user experience, scalability, and
                  performance.
                </li>
                <li>
                  As an individual contributor, I have successfully worked on
                  multiple client projects, engaging in detailed discussions
                  with clients to understand their requirements and developing
                  features accordingly. Additionally, I have designed and built
                  SEO-optimized websites using Next.js, ensuring they are
                  responsive and user-friendly, delivering exceptional
                  experiences to users.
                </li>
                <li>
                  As a team member, Developed an onboarding settings feature
                  that sends email notifications to users, a profile data
                  history function- ality for users to view their data history,
                  and enhanced the application’s usability by updating table
                  dimensions based on column selection. Created a common
                  directive for the team members to display dynamic information.
                  Implemented a chat feature for users and administrators,
                  developed the functionality to display email using user ID,
                  and added the capability to download attached files and handle
                  blob objects, significantly enriching the application’s
                  functionality and user experience. Created reusable
                  components, optimized existing components, resolved bugs, and
                  implemented best practices to enhance functionality and
                  performance, resulting in a more robust, scalable, and
                  efficient application.
                </li>
              </ul>
            </div>
          </li>

          <li className="timeline-item" id="experience">
            <h4 className="h4 timeline-item-title">Software Engineer Intern</h4>
            <span>Searce Inc</span>
            <span>Jan 2022 - Jul 2022</span>

            <p className="timeline-text">
              I used to manage the onboarding and offboarding process using HR
              software. Additionally, I demonstrated my expertise by developing
              multiple browser support extensions, including a LinkedIn
              extension that scrapes user profiles, converts the data into JSON
              format, and stores it in a Firebase database. Furthermore, I
              expanded the application’s reach and capabilities by working on
              Google Cloud Platform (GCP) and developing LinkedIn browser
              extensions.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web Developer</h4>

            <span>EduCARE India NGO (Rural Internship)</span>
            <span>5th December 2019 - 31st December 2019</span>

            <p className="timeline-text">
              I had the privilege of designing and developing a website for
              Educare India, an impactful platform that effectively connects
              passionate volunteers with NGOs, fostering meaningful
              collaborations and making a positive difference in the community.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <img src={education} className={styles.imageClass} />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Dhirubhai Ambani Institute of Information and Communication
              Technology
            </h4>

            <span>2018 — 2022</span>

            <p className="timeline-text">
              Bachelor of Technology | Information and Communication Technology
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Shree Sarashwati Vidhyalaya(GSEB)
            </h4>

            <span>2016 — 2018</span>

            <p className="timeline-text">
              Higher Secondary | Class XII Science
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Komal Vidhyalay(GSEB)</h4>

            <span>2015 — 2016</span>

            <p className="timeline-text">Secondary | Class X</p>
          </li>
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <div className={styles.grid}>
          <a
            className={styles.imgcolumn}
            href="https://reactjs.org/"
            target="__blank">
            <img src={react} alt="react-img-tag" />
            <p className={styles.skilltxt}>React</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://nextjs.org/"
            target="__blank">
            <img src={nextjs} alt="next-img-tag" />
            <p className={styles.skilltxt}>Next.js</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://angular.io/"
            target="__blank">
            <img src={angularImg} alt="angular-img-tag" />
            <p className={styles.skilltxt}>Angular</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://javascript.info/"
            target="__blank">
            <img src={javascriptImg} alt="javascript-img-tag" />
            <p className={styles.skilltxt}>Javascript</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://www.typescriptlang.org/"
            target="__blank">
            <img src={typescriptImg} alt="typescript-img-tag" />
            <p className={styles.skilltxt}>Typescript</p>
          </a>

          <a
            className={styles.imgcolumn}
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="__blank">
            <img src={htmlImg} alt="html-img-tag" />
            <p className={styles.skilltxt}>HTML</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://www.w3schools.com/css/"
            target="__blank">
            <img src={cssImg} alt="css-img-tag" />
            <p className={styles.skilltxt}>CSS</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://pugjs.org/api/getting-started.html"
            target="__blank">
            <img src={pugImg} alt="pug-img-tag" />
            <p className={styles.skilltxt}>Pug</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://nodejs.org/en/docs"
            target="__blank">
            <img src={nodejs} alt="nodejs-img-tag" />
            <p className={styles.skilltxt}>Node.js</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://firebase.google.com/"
            target="__blank">
            <img src={firebaseImg} alt="firebase-img-tag" />
            <p className={styles.skilltxt}>Firebase</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://docs.github.com/en"
            target="__blank">
            <img src={github} alt="github-img-tag" />
            <p className={styles.skilltxt}>Github</p>
          </a>
          <a
            className={`${styles.imgcolumn}`}
            href="https://about.gitlab.com/"
            target="__blank">
            <img src={gitlab} alt="github-img-tag" />
            <p className={styles.skilltxt}>Gitlab</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://www.atlassian.com/software/jira"
            target="__blank">
            <img src={jiraImg} alt="jira-img-tag" />
            <p className={styles.skilltxt}>Jira</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://www.youtube.com/watch?v=_uQrJ0TkZlc"
            target="__blank">
            <img src={pythonImg} alt="python-img-tag" />
            <p className={styles.skilltxt}>Python</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://www.geeksforgeeks.org/c-plus-plus/ "
            target="__blank">
            <img src={cplusImg} alt="c++-img-tag" />
            <p className={styles.skilltxt}>C++</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://www.geeksforgeeks.org/c-programming-language/"
            target="__blank">
            <img src={cImg} alt="c-img-tag" />
            <p className={styles.skilltxt}>C</p>
          </a>
          <a
            className={styles.imgcolumn}
            href="https://www.mongodb.com/"
            target="__blank">
            <img src={mongodb} alt="mongodb-img-tag" />
            <p className={styles.skilltxt}>MongoDB</p>
          </a>
        </div>
      </section>
    </div>
  );
};
export default Resume;

import styles from './Resume.module.css';
import angularImg from '../../assets/imgData/angular.png';
import typescriptImg from '../../assets/imgData/typescript.jpeg';
import javascriptImg from '../../assets/imgData/javascript.png';
import htmlImg from '../../assets/imgData/html.png';
import pugImg from '../../assets/imgData/pug.svg';
import cssImg from '../../assets/imgData/css.png';
import pythonImg from '../../assets/imgData/python.png';
import cplusImg from '../../assets/imgData/c++.png';
import cImg from '../../assets/imgData/c.png';
import firebaseImg from '../../assets/imgData/firebase.png';
import jiraImg from '../../assets/imgData/jira.svg';
import mongodb from '../../assets/imgData/mongodb.webp';
import newTab from '../../assets/imgData/newTab.jpg';
import experience from '../../assets/imgData/experience.png';
import education from '../../assets/imgData/education.png';
import react from '../../assets/imgData/react.png';
import github from '../../assets/imgData/github.png';
import gitlab from '../../assets/imgData/gitlab.png';

const Resume = () => {
  return (
    <div className='resume sectiontoppadding' data-page='resume' id='resume'>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
        <a
          href='https://drive.google.com/file/d/1MpgdJK2voA3KJBMVdw-meB--9qAZ0d06/view?usp=sharing'
          target='__blank'
        >
          <img src={newTab} />
        </a>
      </header>

      <section className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <img src={experience} className={styles.imageClass} />
          </div>

          <h3 className='h3'>Experience</h3>
        </div>

        <ol className='timeline-list'>
          <li className='timeline-item'>
            <h4 className='h4 timeline-item-title'>Software Engineer</h4>
            <span>Searce Inc</span>
            <span>Jul 2022 - Present</span>

            <p className='timeline-text'>
              I'm working on Agile-driven environment to maintain project
              timelines. My primary responsibilities have been centered around
              the design, development and deployment of various features that
              have improved the overall user experience, scalability, and
              performance of the application. My key contributions include:
              Building onboarding settings, which sends notifications to users
              via email. Developing a profile data history feature, enabling
              users to view their history data. Enhancing the application's
              usability by updating table dimensions based on column selection.
              Created a common directive for developers to display dynamic
              information. Developing a feature that identifies and highlights
              any missing mandatory fields within the people profile feature, to
              improve the application's functionality and user experience. This
              feature ensures that users are able to complete their profiles
              accurately and efficiently. Implementing a chat feature between
              users and admin. Developing the feature to show Email using
              userId. Adding functionality for downloading attached files and
              handling blob object. I have also created multiple reusable
              components, I have also made significant efforts to optimize and
              improve the existing components of the application, by identifying
              and resolving bugs, and implementing best practices to improve
              functionality and performance. This resulted in a more robust,
              scalable and efficient application.
            </p>
          </li>

          <li className='timeline-item' id='experience'>
            <h4 className='h4 timeline-item-title'>Software Engineer Intern</h4>
            <span>Searce Inc</span>
            <span>Jan 2022 - Jul 2022</span>

            <p className='timeline-text'>
              I handled onboarding and offboarding process on HR software. I've
              also worked on multiple browser support extensions created
              linkedin extension which scrapes user profile make json of that
              data, and stored in firebase database.
            </p>
          </li>

          <li className='timeline-item'>
            <h4 className='h4 timeline-item-title'>Web Developer</h4>

            <span>EduCARE India NGO (Rural Internship)</span>
            <span>5th December 2019 - 31st December 2019</span>

            <p className='timeline-text'>
              I made a website for Educare India that connects volunteers with
              NGO.
            </p>
          </li>
        </ol>
      </section>

      <section className='timeline'>
        <div className='title-wrapper'>
          <div className='icon-box'>
            <img src={education} className={styles.imageClass} />
          </div>

          <h3 className='h3'>Education</h3>
        </div>

        <ol className='timeline-list'>
          <li className='timeline-item'>
            <h4 className='h4 timeline-item-title'>
              Dhirubhai Ambani Institute of Information and Communication
              Technology
            </h4>

            <span>2018 — 2022</span>

            <p className='timeline-text'>
              Bachelor of Technology | Information and Communication Technology
            </p>
          </li>

          <li className='timeline-item'>
            <h4 className='h4 timeline-item-title'>
              Shree Sarashwati Vidhyalaya(GSEB)
            </h4>

            <span>2016 — 2018</span>

            <p className='timeline-text'>
              Higher Secondary | Class XII Engineering
            </p>
          </li>

          <li className='timeline-item'>
            <h4 className='h4 timeline-item-title'>Komal Vidhyalay(GSEB)</h4>

            <span>2015 — 2016</span>

            <p className='timeline-text'>Secondary | Class X</p>
          </li>
        </ol>
      </section>

      <section className='skill'>
        <h3 className='h3 skills-title'>My skills</h3>
        <div className={styles.grid}>
          <a
            className={styles.imgcolumn}
            href='https://angular.io/'
            target='__blank'
          >
            <img src={angularImg} alt='angular-img-tag' />
            <p className={styles.skilltxt}>Angular</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://javascript.info/'
            target='__blank'
          >
            <img src={javascriptImg} alt='javascript-img-tag' />
            <p className={styles.skilltxt}>Javascript</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://www.typescriptlang.org/'
            target='__blank'
          >
            <img src={typescriptImg} alt='typescript-img-tag' />
            <p className={styles.skilltxt}>Typescript</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://reactjs.org/'
            target='__blank'
          >
            <img src={react} alt='react-img-tag' />
            <p className={styles.skilltxt}>React</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
            target='__blank'
          >
            <img src={htmlImg} alt='html-img-tag' />
            <p className={styles.skilltxt}>HTML</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://pugjs.org/api/getting-started.html'
            target='__blank'
          >
            <img src={pugImg} alt='pug-img-tag' />
            <p className={styles.skilltxt}>Pug</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://www.w3schools.com/css/'
            target='__blank'
          >
            <img src={cssImg} alt='css-img-tag' />
            <p className={styles.skilltxt}>CSS</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://firebase.google.com/'
            target='__blank'
          >
            <img src={firebaseImg} alt='firebase-img-tag' />
            <p className={styles.skilltxt}>Firebase</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://docs.github.com/en'
            target='__blank'
          >
            <img src={github} alt='github-img-tag' />
            <p className={styles.skilltxt}>Github</p>
          </a>
          <a
            className={`${styles.imgcolumn}`}
            href='https://about.gitlab.com/'
            target='__blank'
          >
            <img src={gitlab} alt='github-img-tag' />
            <p className={styles.skilltxt}>Gitlab</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://www.atlassian.com/software/jira'
            target='__blank'
          >
            <img src={jiraImg} alt='jira-img-tag' />
            <p className={styles.skilltxt}>Jira</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://www.youtube.com/watch?v=_uQrJ0TkZlc'
            target='__blank'
          >
            <img src={pythonImg} alt='python-img-tag' />
            <p className={styles.skilltxt}>Python</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://www.geeksforgeeks.org/c-plus-plus/ '
            target='__blank'
          >
            <img src={cplusImg} alt='c++-img-tag' />
            <p className={styles.skilltxt}>C++</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://www.geeksforgeeks.org/c-programming-language/'
            target='__blank'
          >
            <img src={cImg} alt='c-img-tag' />
            <p className={styles.skilltxt}>C</p>
          </a>
          <a
            className={styles.imgcolumn}
            href='https://www.mongodb.com/'
            target='__blank'
          >
            <img src={mongodb} alt='mongodb-img-tag' />
            <p className={styles.skilltxt}>MongoDB</p>
          </a>
        </div>
      </section>
    </div>
  );
};
export default Resume;

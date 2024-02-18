import styles from './Contact.module.css';
import linkedin from '../../assets/imgData/linkedin.png';
import gmail from '../../assets/imgData/gmail.png';
const Contact = () => {
  return (
    <div className='contact sectiontoppadding' data-page='contact' id='contact'>
      <header>
        <h2 className='h2 article-title'>Contact</h2>
      </header>

      <section className='mapbox' data-mapbox>
        <figure>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836565562!2d73.79292694052478!3d18.524766326502217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1672670482273!5m2!1sen!2sin'
            width='600'
            height='450'
            loading='lazy'
          ></iframe>
        </figure>
      </section>
      <div className={styles['connect']}>Connect</div>
      <div className={styles['getintouch']}>GET IN TOUCH</div>
      <div className={styles['grid-container']}>
        <a href='mailto:nipunpatel7@gmail.com' style={{width:'fit-content'}}>
          <div
            className={`${styles.alignimage} ${styles['connect-text']}`}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img src={gmail} />
            <p>nipunpatel7@gmail.com</p>
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/nipun-patel-328886207/'
          target='__blank'
          style={{width:'fit-content'}}
        >
          <div
            className={styles.alignimage}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img src={linkedin} />
            <p className={`${styles['inline']} ${styles['connect-text']}`}>
              LinkedIn
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;

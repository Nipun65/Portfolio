import styles from './Card.module.css';
const Card = (props) => {
  const Props = props.portFolio;
  return (
    <div className={styles['card-deck']}>
      {Props.map((value) => (
        <div className={styles.mainTag} key={Math.random()}>
          <a
            href={value.link}
            target='_blank'
            className={styles.aTag}
            rel='noreferrer'
          >
            <div className={styles['section_title']}>{value.projectName}</div>
            <div className={styles['about_section']}>
              <span className={styles['link']}>{value.description}</span>
            </div>
            <div className={styles['bottom_section']}>
              <span className={styles['lang']}>
                {'</>'}&nbsp; {value.language}
              </span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card;

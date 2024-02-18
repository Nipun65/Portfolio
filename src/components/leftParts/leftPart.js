import personal from '../../assets/imgData/personal.jpeg';

function LeftPart() {
  return (
    <aside className='sidebar active' data-sidebar='' id='about'>
      <div className='sidebar-info'>
        <figure className='avatar-box'>
          <img src={personal} alt='Nipun Patel' width='80' />
        </figure>

        <div className='info-content'>
          <h1 className='name' title='Nipun Patel'>
            Nipun Patel
          </h1>

          <p className='title'>Software Engineer</p>
        </div>
      </div>
      <div className='about active aboutpadding' data-page='about' id='about'>
        <header>
          <h2 className='h2 article-title'>About me</h2>
        </header>
        <section className='about-text'>
          <p>
            Hi, my name is Nipun. I'm Software Engineer. My
            passion is to solve real-world problems and provide optimal
            solutions. I have a BTech degree in ICT from Dhirubhai Ambani
            Institute of Information and Technology. My job entails building
            user-friendly and aesthetically pleasing websites. In my free time,
            I enjoy playing cricket, listening to music, and exploring new
            things. My ultimate goal is to enhance human life by solving
            problems.
          </p>
        </section>
      </div>
    </aside>
  );
}

export default LeftPart;

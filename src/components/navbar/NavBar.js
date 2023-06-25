import { useEffect, useRef } from 'react';

const NavBar = props => {
  console.log(props);

  const about = useRef();
  const resume = useRef();
  const portfolio = useRef();

  const contact = useRef();

  const handleClick = view => {
    setCssNav(view);
    props.viewContent(view);
  };

  const setCssNav = view => {
    console.log(view);
    removeClass();
    if (view === 'about') {
      about.current.classList.add('active');
    } else if (view === 'resume') {
      resume.current.classList.add('active');
    } else if (view === 'portfolio') {
      portfolio.current.classList.add('active');
    } else if (view === 'contact') {
      contact.current.classList.add('active');
    }
  };

  const removeClass = () => {
    about.current.classList.remove('active');
    resume.current.classList.remove('active');
    portfolio.current.classList.remove('active');
    contact.current.classList.remove('active');
  };

  const checkVisibleElements = (targetElement, setTo) => {
    if (targetElement) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            setCssNav(setTo);
          }
        });
      });
      observer.observe(targetElement);
      return () => observer.unobserve(targetElement);
    }
  };

  useEffect(() => {
    const targetAbout = document.getElementById('about');
    const targetResume = document.getElementById('resume');
    const targetPortfolio = document.getElementById('portfolio');
    const targetContact = document.getElementById('contact');
    const targetLastResume = document.getElementById('experience');

    checkVisibleElements(targetContact, 'contact');
    checkVisibleElements(targetPortfolio, 'portfolio');
    checkVisibleElements(targetLastResume, 'resume');
    checkVisibleElements(targetResume, 'resume');
    checkVisibleElements(targetAbout, 'about');
  }, []);

  return (
    <aside className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <button
            ref={about}
            className='navbar-link active'
            onClick={() => handleClick('about')}
            data-nav-link
          >
            About
          </button>
        </li>

        <li className='navbar-item'>
          <button
            ref={resume}
            className='navbar-link'
            data-nav-link
            onClick={() => handleClick('resume')}
          >
            Resume
          </button>
        </li>

        <li className='navbar-item'>
          <button
            ref={portfolio}
            className='navbar-link'
            data-nav-link
            onClick={() => handleClick('portfolio')}
          >
            Portfolio
          </button>
        </li>

        <li className='navbar-item'>
          <button
            ref={contact}
            className='navbar-link'
            data-nav-link
            onClick={() => handleClick('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default NavBar;

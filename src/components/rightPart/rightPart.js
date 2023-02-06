import { useEffect } from 'react';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Portfolio from '../PortFolio/Portfolio';
function RightPart(props) {
  useEffect(() => {
    console.log(props.userView);
    document.getElementById(props.userView).scrollIntoView();
  }, [props]);

  return (
    <article className='active' data-page='about'>
      <Resume />
      <Portfolio />
      <Contact />
    </article>
  );
}

export default RightPart;

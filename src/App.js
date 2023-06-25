import './App.css';
import './styles.css';
import LeftPart from './components/leftParts/leftPart';
import RightPart from './components/rightPart/rightPart';
import NavBar from './components/Navbar/NavBar';
import { useState } from 'react';

function App() {
  const [view, setView] = useState('about');

  const showView = view => {
    setView(view);
  };

  return (
    <div>
      <div className='float-child-left'>
        <LeftPart />
      </div>
      <NavBar viewContent={showView} />
      <div className='float-child' id='showView'>
        {<RightPart userView={view} />}
      </div>
    </div>
  );
}

export default App;

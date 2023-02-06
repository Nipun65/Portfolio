import Card from '../Card/Card';

const Portfolio = () => {
  const portFolio = [
    {
      projectName: 'Todo',
      link: 'https://github.com/Nipun65/Todo-Web-Application',
      language: 'Angular',
      description: 'A todo app :)',
    },
    {
      projectName: 'RandomMeme',
      link: 'https://github.com/Nipun65/RandomMeme',
      language: 'JavaScript',
      description: 'Created browser extension which generate random meme',
    },
    {
      projectName: 'Video GamesDB',
      link: 'https://github.com/Nipun65/VideogameDB',
      language: 'ReactJS',
      description: 'Shows the information about the games',
    },
    {
      projectName: 'Online Car Parking Reservation',
      link: 'https://github.com/Nipun65/Group5-Online_Car_Parking_Reservation_System',
      language: 'JavaScript',
      description: 'Website for booking online parking slot',
    },
    {
      projectName: 'Login Page',
      link: 'https://github.com/Nipun65/LogIn-Page',
      language: 'ReactJS',
      description: 'Login Page Demo',
    },

    {
      projectName: 'Expense List',
      link: 'https://github.com/Nipun65/ExpenseList',
      language: 'ReactJS',
      description: 'Webapp for tracking expenses',
    },
  ];
  return (
    <div id='portfolio' className='sectiontoppadding'>
      <header>
        <h2 className='h2 article-title'>Portfolio</h2>
      </header>
      <Card portFolio={portFolio} />
    </div>
  );
};
export default Portfolio;

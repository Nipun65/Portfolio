import Card from "../Card/Card";

const Portfolio = () => {
  const portFolio = [
    {
      projectName: "Todo",
      link: "https://github.com/Nipun65/Todo-Web-Application",
      language: "Angular",
      description: "A todo app :)",
    },
    {
      projectName: "RandomMeme",
      link: "https://github.com/Nipun65/RandomMeme",
      language: "JavaScript",
      description: "Created browser extension which generate random meme",
    },
    {
      projectName: "Video GamesDB",
      link: "https://github.com/Nipun65/VideogameDB",
      language: "ReactJS",
      description: "Shows the information about the games",
    },
    {
      projectName: "Online Car Parking Reservation",
      link: "https://github.com/Nipun65/Group5-Online_Car_Parking_Reservation_System",
      language: "JavaScript",
      description: "Website for booking online parking slot",
    },
    {
      projectName: "Login Page",
      link: "https://github.com/Nipun65/LogIn-Page",
      language: "ReactJS",
      description: "Login Page Demo",
    },
    {
      projectName: "Expense List",
      link: "https://github.com/Nipun65/ExpenseList",
      language: "ReactJS",
      description: "Webapp for tracking expenses",
    },
    {
      projectName: "Ecommerce Website",
      link: "https://github.com/Nipun65/Ecommerce-Website",
      language: "NodeJS",
      description: "Ecommerce website to sell and buy products",
    },
    {
      projectName: "SEO NextJS",
      link: "https://github.com/Nipun65/nextjs-seo",
      language: "NextJS",
      description:
        "Character Details of 'The Office': Identifying the Beloved Characters of the Show(SEO, Static HTML rendering using nextjs)",
    },
    {
      projectName: "Todo App(Vuejs)",
      link: "https://github.com/Nipun65/Todo-VueJS",
      language: "VueJS",
      description: "Todo app using vuejs",
    },
    {
      projectName: "Snake",
      link: "https://github.com/Nipun65/snake.js",
      language: "Javascript",
      description: "Snake game using Javascript",
    },
    {
      projectName: "Tic-tac-toe",
      link: "https://github.com/Nipun65/tictactoe",
      language: "Javascript",
      description: "Tic-tac-toe game using Javascript",
    },
  ];
  return (
    <div id="portfolio" className="sectiontoppadding">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <Card portFolio={portFolio} />
    </div>
  );
};
export default Portfolio;

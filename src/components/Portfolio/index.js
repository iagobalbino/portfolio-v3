import './Portfolio.css';
import SectionTitle from '../SectionTitle';
import PortfolioCard from '../PortfolioCard';

const Portfolio = ({ portfolioArr }) => {
  return (
    <div className='portfolio-container'>
      <SectionTitle title='Portfólio' />
      {portfolioArr.map((project => <PortfolioCard project={project} />))}
    </div>
  );
};

export default Portfolio;
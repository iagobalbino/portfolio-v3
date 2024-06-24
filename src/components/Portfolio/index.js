import './Portfolio.css';
import SectionTitle from '../SectionTitle';
import PortfolioCard from '../PortfolioCard';

const Portfolio = ({ portfolioArr }) => {
  return (
    <section className='section-container'>
      <SectionTitle title='Portfólio' />
      <div className='portfolio-container'>
        {portfolioArr.map((project => <PortfolioCard project={project} />))}
      </div>
    </section>
  );
};

export default Portfolio;
import './PortfolioCard.css';
import { FiGithub } from 'react-icons/fi';
import { RxExternalLink } from 'react-icons/rx';

const PortfolioCard = ({ project }) => {
  return (
    <div className='card'>
      <div className='project-description'>
        <div className='container-img'>
          <img src={project.image} alt={project.description} />
        </div>

        <h3>{project.name}</h3>
        <div className='project-info'>
          <p>{project.description}</p>
          <div className='tecnology'>
            {project.tecnologies.map((tec => <p>{tec}</p>))}
          </div>
          <div className='icons'>
            <a href={project.github} target='_blank'><FiGithub className='github' /></a>
            <a href={project.link} target='_blank'><RxExternalLink className='external-link' /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
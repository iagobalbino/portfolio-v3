import './ProjectCardLeft.css';
import { FiGithub } from 'react-icons/fi';
import { RxExternalLink } from 'react-icons/rx';

const ProjectCardLeft = ({ name, image, description, github, link }) => {
  return (
    <div className='card'>
      <h3>{name}</h3>

      <div className='project-description'>
        <div className='project-info'>
          <p>{description}</p>
          <div className='icons'>
            <a href={github} target='_blank'><FiGithub className='github' /></a>
            <a href={link} target='_blank'><RxExternalLink className='external-link' /></a>
          </div>

          <div className='tecnology'>
            <p>HTML</p>
            <p>CSS</p>
          </div>
        </div>
        <div className='container-img'>
          <img src={image} alt={description} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardLeft;
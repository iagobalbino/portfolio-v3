import './ProjectCard.css';

const ProjectCard = ({ name, image, description }) => {
  return (
    <div className='card'>
      <h3>{name}</h3>

      <div className='project-description'>
        <div className='container-img'>
          <img src={image} alt={description} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
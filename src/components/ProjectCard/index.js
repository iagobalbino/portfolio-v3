import './ProjectCard.css';

const ProjectCard = ({ projectName, description }) => {
  return (
    <div className='card'>
      <h3>{projectName}</h3>

      <div className='project-description'>
        <div className='container-img'>
          {/* <img src={props.url} alt={props.projetcName} /> */}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
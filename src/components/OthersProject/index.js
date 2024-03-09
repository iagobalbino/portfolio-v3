import './OthersProject.css';
import OthersCard from '../OthersCard';

const OthersProject = (otherProjects) => {
  return (
    <div className='othersCard-container'>
      {otherProjects.map((otherProject) => <OthersCard otherProject={otherProject} />)}
    </div>
  );
};

export default OthersProject;

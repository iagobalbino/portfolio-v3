import './OthersProject.css';
import OthersCard from '../OthersCard';

const OthersProject = ({ projects }) => {
  return (
    <div className='othersCard-container'>
      {projects.map((otherProject) => <OthersCard otherProject={otherProject} />)}
    </div>
  );
};

export default OthersProject;

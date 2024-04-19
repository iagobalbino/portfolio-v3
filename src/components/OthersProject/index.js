import './OthersProject.css';
import OthersCard from '../OthersCard';

const OthersProject = ({ projects }) => {
  return (
    <div className='othersCard-container'>
      {/* <h2>Teste</h2> */}
      <div className='othersCards'>
        {projects.map((otherProject) => <OthersCard otherProject={otherProject} />)}
      </div>
    </div>
  );
};

export default OthersProject;

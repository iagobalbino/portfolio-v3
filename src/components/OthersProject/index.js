import './OthersProject.css';
import OthersCard from '../OthersCard';
import SectionTitle from '../SectionTitle';

const OthersProject = ({ projectArr }) => {
  return (
    <div className='container'>
      <SectionTitle title='Outros projets' />
      <div className='othersCard-container'>
        {/* {projectArr.map((project) => <OthersCard otherProject={project} />)} */}
        {/* Tentando rendereizar somente o card de outros projetos */}
      </div>
    </div>
  );
};

export default OthersProject;

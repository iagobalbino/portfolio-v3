import './OthersProject.css';
import OthersCard from '../OthersCard';
import SectionTitle from '../SectionTitle';

const OthersProject = ({ projectArr }) => {
  return (
    <div className='container'>
      <SectionTitle title='Outros projetos' />
      <div className='othersCard-container'>
        {projectArr.map((project) => <OthersCard otherProject={project} />)}
      </div>
    </div>
  );
};

export default OthersProject;

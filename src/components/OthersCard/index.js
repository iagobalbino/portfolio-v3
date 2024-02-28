import './OthersCard.css';
import { CiFolderOn } from "react-icons/ci";

const OthersCard = ({ tag1, tag2, projectName, projectDescription }) => {
  return (
    <div className='container'>
      <CiFolderOn className='CiFolderOn' />
      <h3>{projectName}</h3>
      <p>{projectDescription}</p>
      <div className='tech-tags'>
        <p>{tag1}</p>
        <p>{tag2}</p>
      </div>
    </div>
  );
};

export default OthersCard;
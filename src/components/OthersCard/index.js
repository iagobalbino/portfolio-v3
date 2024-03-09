import './OthersCard.css';
import { CiFolderOn } from "react-icons/ci";

const OthersCard = ({ otherProject }) => {
  return (
    <div className='othersCard'>
      <CiFolderOn className='CiFolderOn' />
      <h3>{otherProject.name}</h3>
      <p>{otherProject.description}</p>
      <div className='tech-tags'>
        <p>{otherProject.tag1}</p>
        <p>{otherProject.tag2}</p>
      </div>
    </div>
  );
};

export default OthersCard;
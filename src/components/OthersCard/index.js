import './OthersCard.css';
import { CiFolderOn } from "react-icons/ci";

const OthersCard = ({ tag1, tag2, name, description }) => {
  return (
    <div className='othersCard'>
      <CiFolderOn className='CiFolderOn' />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className='tech-tags'>
        <p>{tag1}</p>
        <p>{tag2}</p>
      </div>
    </div>
  );
};

export default OthersCard;
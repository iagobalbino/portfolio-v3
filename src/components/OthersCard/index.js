import './OthersCard.css';
import { CiFolderOn } from "react-icons/ci";

const OthersCard = ({ otherProject }) => {
  return (
    <div className="others-card-container">
      <div className='othersCard'>
        <CiFolderOn className='CiFolderOn' />
        <h3>{otherProject.name}</h3>
        <p>{otherProject.description}</p>
        <div className='tecs'>
          {otherProject.tecnologies.map(tec => <p>{tec}</p>)}
        </div>
      </div>
    </div>

  );
};

export default OthersCard;
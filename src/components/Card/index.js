import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <h3>{props.projectName}</h3>

      <div className='project-description'>
        <img src={props.url} alt={props.projetcName} />
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
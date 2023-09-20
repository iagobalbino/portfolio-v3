import './SectionTitle.css';

const SectionTitle = (props) => {
  return (
    <div className='title'>
      <h3 className='section-title'>{props.title}</h3>
      <div className='line'></div>
    </div>
  );
};

export default SectionTitle;
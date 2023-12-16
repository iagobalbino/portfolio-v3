import './Burguer.css';

const Burguer = ({ toggled }) => {

  return (
    <nav className='burguer-menu' onClick={toggled}>
      <div className='burguer-line' />
      <div className='burguer-line' />
      <div className='burguer-line' />
    </nav>
  );
};

export default Burguer;
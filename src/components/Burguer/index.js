import './Burguer.css';

const Burguer = ({ onMenu }) => {
  return (
    <nav className='burguer-menu' onClick={onMenu}>
      <div className='burguer-line' />
      <div className='burguer-line' />
      <div className='burguer-line' />
    </nav>
  );
};

export default Burguer;
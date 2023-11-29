import { useState } from 'react';
import Menu from '../Menu';
import './Burguer.css';

const Burguer = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className='burguer-menu'
      onClick={() => setToggle(!false)}
    >
      <div className='burguer-line' />
      <div className='burguer-line' />
      <div className='burguer-line' />
      <Menu

      />
    </nav>
  );
};

export default Burguer;
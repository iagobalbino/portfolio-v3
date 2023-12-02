import { useState } from 'react';
import Menu from '../Menu';
import './Burguer.css';

const Burguer = () => {
  const [toggle, setToggle] = useState(false);

  function clicked() {
    if (!toggle) {
      return <Menu />;
    } else {
      return null;
    }
  };

  return (
    <nav
      className='burguer-menu'
      onClick={() => setToggle(!false)}
    >
      <div className='burguer-line' />
      <div className='burguer-line' />
      <div className='burguer-line' />
    </nav>
  );
};

export default Burguer;
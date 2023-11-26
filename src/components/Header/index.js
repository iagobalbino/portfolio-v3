import Nav from '../Nav/Nav';
import './Header.css';
import { useState } from 'react';

const Header = () => {

  return (
    <header className='header'>
      <h1 className='logo'>
        <a href="/">
          <img src="images/logo.svg" alt="Logo" />
        </a>
      </h1>
    </header>
  );
};

export default Header;
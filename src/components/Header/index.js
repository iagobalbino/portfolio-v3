import './Header.css';
import Hamburger from 'hamburger-react'

const Header = () => {

  return (
    <header className='header'>
      <h1 className='logo'>
        <a href="/">
          <img src="images/logo.svg" alt="Logo" />
        </a>
      </h1>

      <Hamburger onToggle={toggled => {
        if (toggled) {

        }
      }} />

      <ul className='nav'>
        <li>
          <a href='/'>Sobre</a>
        </li>
        <li>
          <a href="/">Portfólio</a>
        </li>
        <li>
          <a href="/">Contato</a>
        </li>
      </ul>

    </header>
  );
};

export default Header;
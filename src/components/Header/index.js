import './Header.css';
import Nav from '../Nav/Nav';
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
          <Nav />;
        } else {
          console.log('fechado');
        }
      }}
      />

      {/* <Nav /> */}
    </header>
  );
};

export default Header;
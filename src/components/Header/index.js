import Burguer from '../Burguer';
import Menu from '../Menu';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'>
        <a href="/">
          <img src="images/logo.svg" alt="Logo" />
        </a>
      </h1>
      <Burguer />
      <Menu />
    </header>
  );
};

export default Header;
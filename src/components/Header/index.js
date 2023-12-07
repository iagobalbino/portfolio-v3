import './Header.css';
import Burguer from '../Burguer';
import Menu from '../Menu';

const Header = (menu) => {
  // function showMenu() {
  //   console.log('Clicado');
  // };

  return (
    <header className='header'>
      <h1 className='logo'>
        <a href="/">
          <img src="images/logo.svg" alt="Logo" />
        </a>
      </h1>
      {/* <Burguer menu={showMenu} /> */}
    </header>
  );
};

export default Header;
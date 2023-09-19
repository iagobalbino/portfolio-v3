import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'>
        <a href="/">
          <img src="images/logo.svg" alt="Logo" />
        </a>
      </h1>
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
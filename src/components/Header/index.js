import './Header.css';

const Header = ({ href }) => {
  return (
    <header className='header'>
      <h1 className='logo'>
        <a href="/">
          <img src="images/logo.svg" alt="Logo" />
        </a>
      </h1>
      <ul className='header-menu'>
        <li><a href={href}>Sobre</a></li>
        <li><a href={href}>Portfólio</a></li>
        <li><a href={href}>Contato</a></li>
      </ul>
    </header>
  );
};

export default Header;
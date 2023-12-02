import './Menu.css';


const Menu = () => {

  const isVisible = { transform: 'translateX(-100%)' };

  return (
    <div className='full-menu' style={{ isVisible }}>
      <a href="/">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        Sobre
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f4b8;</span>
        Portfólio
      </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contato
      </a>
    </div>
  );
};

export default Menu;
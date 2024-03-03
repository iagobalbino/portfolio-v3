import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <p>Site desenhando e desenvolvido por Iago Balbino.</p>
        <div className='icons'>
          <FaLinkedin className='linkedin' />
          <FaGithub className='github' />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
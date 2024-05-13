import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <p>Site desenhando e desenvolvido por Iago Balbino.</p>
        <div className='icons'>
          <a href='https://www.linkedin.com/in/iagobalbino/' target='_blank' rel='noreferrer'>
            <FaLinkedin className='linkedin' />
          </a>
          <a href='https://github.com/iagobalbino' target='_blank' rel='noreferrer'>
            <FaGithub className='github' />
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
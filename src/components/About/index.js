import SectionTitle from '../SectionTitle';
import './About.css';

const About = ({ aboutText }) => {
  return (
    <div className='container-about'>
      <div className='about'>
        <div className='about-text'>
          <SectionTitle className='section-title' title='Sobre' />
          <p>{aboutText}
          </p>

          <br />
          <p>Aqui estão algumas tecnologias que já utilizei:</p>
          <br />

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Git</li>
            <li>Figma</li>
          </ul>
        </div>
        {/* <div className='profile-container'> */}
        <div className='styled-border'>
          <img className='profile-img' src="https://github.com/iagobalbino.png" alt="Iago" />
        </div>
        {/* </div> */}
      </div>

    </div>

  );
};

export default About;
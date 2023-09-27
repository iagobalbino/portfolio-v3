import './About.css';

const About = () => {
  return (
    <div className='about'>
      <div className='about-text'>
        <p>Localizado no Rio de Janeiro, sou um Desenvolvedor Front-End que descobriu a sua paixão por programação na faculdade, meu gosto por tecnologia veio sempre de muito cedo. Estou sempre em busca de aprimoramento, atualmente tenho focado a desenvolver minhas habilidades com o React.js.
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
        </ul>
      </div>
      <img className='profile-img' src="https://github.com/iagobalbino.png" alt="Iago" />
    </div>
  );
};

export default About;
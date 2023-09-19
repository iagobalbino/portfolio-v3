import './Hero.css';

const Hero = (props) => {
  return (
    <section className='hero-page'>
      <h2 className='name-title'>
        {props.name}
      </h2>
      <p>
        {props.jobTitle}
      </p>
      <div className='social-media'>
        <a href={props.urlLinkedin}>
          <img src="images/linkedin.svg" alt="LinkedIn" />
        </a>

        <a href={props.github}>
          <img src="images/github.svg" alt="Github" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
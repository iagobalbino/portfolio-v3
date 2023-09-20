import './Hero.css';

const Hero = (props) => {
  return (
    <section className='hero-page'>
      <h2 className='name-title'>
        {props.name}
      </h2>
      <p className='job-title'>
        {props.jobTitle}
      </p>
      <div className='social-media'>
        <a href={props.urlLinkedin}>
          <img src="images/linkedin_white.svg" alt="LinkedIn" />
        </a>

        <a href={props.github}>
          <img src="images/github_white.svg" alt="Github" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
import './Hero.css';

const Hero = ({ linkedin, github, jobTitle, name }) => {
  return (
    <section className='hero-page'>
      <h2 className='name-title'>
        {name}
      </h2>
      <p className='job-title'>
        {jobTitle}
      </p>
      <div className='social-media'>
        <a href={linkedin} target='_blank' rel='noreferrer'>
          <img src="images/linkedin_white.svg" alt="LinkedIn" />
        </a>

        <a href={github} target='_blank' rel='noreferrer'>
          <img src="images/github_white.svg" alt="Github" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
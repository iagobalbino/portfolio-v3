import About from "../About";
import Footer from "../Footer/footer";
import Header from "../Header";
import Hero from "../Hero";
import OthersProject from "../OthersProject";
import Portfolio from "../Portfolio";
import projects from "../Data/projects";
import basicProjects from "../Data/basicProjects";

const Home = () => {
  return (
    <>
      <Header />
      <Hero
        name='Iago Balbino'
        jobTitle='Desenvolvedor Front-End'
        linkedin='https://www.linkedin.com/in/iagobalbino/'
        github='https://github.com/iagobalbino'
      />
      <About
        aboutText={'Localizado no Rio de Janeiro, sou um Desenvolvedor Front-End que descobriu a sua paixão por programação na faculdade, meu gosto por tecnologia veio sempre de muito cedo. Estou sempre em busca de aprimoramento, atualmente tenho focado a desenvolver minhas habilidades com o React.js.'}
      />

      <Portfolio portfolioArr={projects.map((project => project))} />
      <OthersProject projectArr={basicProjects.map((project => project))} />
      <Footer />
    </>
  );
};

export default Home;
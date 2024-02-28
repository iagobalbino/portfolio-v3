import './App.css';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import About from './components/About';
import ProjectCardLeft from './components/ProjectCardLeft';
import ProjectCard from './components/ProjectCard';
import Menu from './components/Menu';
import { useState } from 'react';
import Burguer from './components/Burguer';
import Header from './components/Header';
import OthersCard from './components/OthersCard';
import Footer from './components/Footer/footer';

function App() {
  const [open, setOpen] = useState('');

  function showMenu() {
    console.log(setOpen('Clicado!'));
  };

  const [projects, setProjects] = useState(
    [
      {
        name: 'Profile Card (Front End Mentor)',
        image: 'images/profile_card_main.jpg',
        description: 'Primeiro projeto que fiz do ótimo site frontendmentor.io, onde foi desenvolvido um card de rede social.',
        tecnologies: ['HTML', 'CSS'],
        github: 'https://github.com/iagobalbino/profile-card-component-main',
        link: 'https://github.com/iagobalbino/profile-card-component-main'
      },
      {
        name: 'Devflix (DIO)',
        image: 'images/devflix.png',
        description: 'Clone da interface da Netflix, projeto do bootcamp MRV Front End SPA Developer da Digital Innovation One.',
        tecnologies: ['HTML', 'CSS', 'JavaScript', 'Jquery'],
        github: 'https://github.com/iagobalbino/dio-devflix',
        link: 'https://github.com/iagobalbino/dio-devflix'
      },
      {
        name: 'Casa Verde',
        image: 'images/devflix.png',
        description: 'Projeto do desafio de 7 dias de React da Alura',
        tecnologies: ['React'],
        github: 'https://github.com/iagobalbino/7-days-react',
        link: 'https://github.com/iagobalbino/7-days-react'
      }
    ]
  );

  // for (let i = 0; i < projects.length; i++) {
  //   if (projects[i] % 2 === 0) {
  //     return (
  //       projects.map(projects =>
  //         <ProjectCard
  //           name={projects.name}
  //           image={projects.image}
  //           description={projects.description}
  //           github={projects.github} link={projects.link}
  //         />)
  //     );
  //   } else {
  //     return (
  //       projects.map(projects =>
  //         <ProjectCardLeft
  //           name={projects.name}
  //           image={projects.image}
  //           description={projects.description}
  //           github={projects.github} link={projects.link}
  //         />)
  //     );
  //   }
  // }

  return (

    <div className="App">
      {/* <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>
          <img src="images/logo.svg" alt="Logo" />
        </h1>
        <Burguer toggled={showMenu} />
        <Menu />
      </header> */}
      <Header />
      <Hero
        name='Iago Balbino'
        jobTitle='Desenvolvedor Front-End'
        urlLinkeding='https://www.linkedin.com/in/iagobalbino/'
      />
      <SectionTitle title='Sobre' />
      <About
        aboutText={'Localizado no Rio de Janeiro, sou um Desenvolvedor Front-End que descobriu a sua paixão por programação na faculdade, meu gosto por tecnologia veio sempre de muito cedo. Estou sempre em busca de aprimoramento, atualmente tenho focado a desenvolver minhas habilidades com o React.js.'}
      />
      <SectionTitle title='Portfólio' />
      {/* <ProjectCard
        name={projects[0].name}
        image={projects[0].image}
        description={projects[0].about}
      /> */}

      {projects.map(projects =>
        <ProjectCard
          name={projects.name}
          image={projects.image}
          description={projects.description}
          github={projects.github} link={projects.link}
        />)
      }
      <SectionTitle title='Outros Projetos' />
      <OthersCard
        projectName={'Mobile Blog App Interface'}
        projectDescription={'Primeiro projeto que fiz do ótimo site frontendmentor.io, onde foi desenvolvido um card de rede social.'}
        tag1={'HTML5'}
        tag2={'CSS3'}
      />
      <Footer />
    </div>
  );
}

export default App;

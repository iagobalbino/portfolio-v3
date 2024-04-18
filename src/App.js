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
import OthersProject from './components/OthersProject';

function App() {
  const [open, setOpen] = useState('');

  function showMenu() {
    console.log(setOpen('Clicado!'));
  };

  const [projects, setProjects] = useState(
    [
      {
        name: 'Profile Card (Front End Mentor)',
        image: './images/profile_card_main.jpg',
        description: 'Primeiro projeto que fiz do ótimo site frontendmentor.io, onde foi desenvolvido um card de rede social.',
        tecnologies: ['HTML', 'CSS'],
        github: 'https://github.com/iagobalbino/profile-card-component-main',
        link: 'https://github.com/iagobalbino/profile-card-component-main'
      },
      {
        name: 'Devflix (DIO)',
        image: './images/devflix.png',
        description: 'Clone da interface da Netflix, projeto do bootcamp MRV Front End SPA Developer da Digital Innovation One.',
        tecnologies: ['HTML', 'CSS', 'JavaScript', 'Jquery'],
        github: 'https://github.com/iagobalbino/dio-devflix',
        link: 'https://github.com/iagobalbino/dio-devflix'
      },
      {
        name: 'Casa Verde',
        image: './images/mobile_blog_interface.jpg',
        description: 'Projeto do desafio de 7 dias de React da Alura',
        tecnologies: ['React'],
        github: 'https://github.com/iagobalbino/7-days-react',
        link: 'https://github.com/iagobalbino/7-days-react'
      }
    ]
  );

  const [basicProjects, setBasicProjects] = useState(
    [
      {
        name: 'Profile Card (Front End Mentor)',
        description: 'Primeiro projeto que fiz do ótimo site frontendmentor.io, onde foi desenvolvido um card de rede social.',
        tecnologies: ['HTML', 'CSS'],
        github: 'https://github.com/iagobalbino/profile-card-component-main',
        link: 'https://github.com/iagobalbino/profile-card-component-main'
      },
      {
        name: 'Devflix (DIO)',
        description: 'Clone da interface da Netflix, projeto do bootcamp MRV Front End SPA Developer da Digital Innovation One.',
        tecnologies: ['HTML', 'CSS', 'JavaScript', 'Jquery'],
        github: 'https://github.com/iagobalbino/dio-devflix',
        link: 'https://github.com/iagobalbino/dio-devflix'
      },
      {
        name: 'Casa Verde',
        description: 'Projeto do desafio de 7 dias de React da Alura',
        tecnologies: ['React'],
        github: 'https://github.com/iagobalbino/7-days-react',
        link: 'https://github.com/iagobalbino/7-days-react'
      }
    ]
  );

  return (

    <div className="App">

      <Header />
      <Hero
        name='Iago Balbino'
        jobTitle='Desenvolvedor Front-End'
        urlLinkeding='https://www.linkedin.com/in/iagobalbino/'
      />
      {/* <SectionTitle title='Sobre' /> */}
      <About
        aboutText={'Localizado no Rio de Janeiro, sou um Desenvolvedor Front-End que descobriu a sua paixão por programação na faculdade, meu gosto por tecnologia veio sempre de muito cedo. Estou sempre em busca de aprimoramento, atualmente tenho focado a desenvolver minhas habilidades com o React.js.'}
      />
      <SectionTitle title='Portfólio' />

      {projects.map(projects =>
        <ProjectCard
          name={projects.name}
          image={projects.image}
          description={projects.description}
          github={projects.github} link={projects.link}
        />)
      }
      <SectionTitle title='Outros Projetos' />

      {basicProjects.map((otherProject) => <OthersProject projects={basicProjects.map(project => project)} />)}
      {/* Renderizar o card de OthersProject com estilo em grid */}
      <Footer />
    </div>
  );
}

export default App;

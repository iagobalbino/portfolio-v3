import './App.css';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Menu from './components/Menu';
import { useState } from 'react';
import Burguer from './components/Burguer';
import Header from './components/Header';

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
        about: 'Primeiro projeto que fiz do ótimo site frontendmentor.io, onde foi desenvolvido um card de rede social.',
        tecnologies: ['HTML', 'CSS'],
        githubLink: 'https://github.com/iagobalbino/profile-card-component-main',
        link: 'https://github.com/iagobalbino/profile-card-component-main'
      },
      {
        name: 'Profile Card (Front End Mentor)',
        image: '',
        about: 'Primeiro projeto que fiz do ótimo site frontendmentor.io, onde foi desenvolvido um card de rede social.',
        tecnologies: ['HTML', 'CSS'],
        githubLink: 'https://github.com/iagobalbino/profile-card-component-main',
        link: 'https://github.com/iagobalbino/profile-card-component-main'
      },
      {
        name: 'Profile Card (Front End Mentor)',
        image: '',
        about: 'Primeiro projeto que fiz do ótimo site frontendmentor.io, onde foi desenvolvido um card de rede social.',
        tecnologies: ['HTML', 'CSS'],
        githubLink: 'https://github.com/iagobalbino/profile-card-component-main',
        link: 'https://github.com/iagobalbino/profile-card-component-main'
      }
    ]
  );

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
      <ProjectCard
        name={projects[0].name}
        image={projects[0].image}
        description={projects[0].about}
      />
      <SectionTitle title='Outros Projetos' />

    </div>
  );
}

export default App;

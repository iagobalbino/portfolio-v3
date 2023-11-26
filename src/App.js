import Header from './components/Header';
import './App.css';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import About from './components/About';
import Card from './components/Card';

function App() {


  return (
    <div className="App">
      <Header />
      <Hero
        name='Iago Balbino'
        jobTitle='Desenvolvedor Front-End'
        urlLinkeding='https://www.linkedin.com/in/iagobalbino/'
      />
      <SectionTitle title='Sobre' />
      <About />
      <SectionTitle title='Portfólio' />
      <Card
        projectName='Profile Card (Front End Mentor)'
        url='images/profile_card_main_small.jpg'
        description='Primeiro projeto que fiz do ótimo site frontendmentor.io, onde foi desenvolvido um card de rede social.'
      />
      <SectionTitle title='Outros Projetos' />

    </div>
  );
}

export default App;

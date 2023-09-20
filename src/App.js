import Header from './components/Header';
import './App.css';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';

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
      <SectionTitle title='Portfólio' />
      <SectionTitle title='Outros Projetos' />

    </div>
  );
}

export default App;

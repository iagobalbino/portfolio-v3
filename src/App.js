import Header from './components/Header';
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero
        name='Iago Balbino'
        jobTitle='Desenvolvedor Front-End'
        urlLinkeding='https://www.linkedin.com/in/iagobalbino/'
      />
    </div>
  );
}

export default App;

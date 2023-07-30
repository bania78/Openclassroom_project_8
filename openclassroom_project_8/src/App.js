import './styles/App.css';
import Projects from './data/projects.json'
import Nav from './components/Nav/Nav';
import Pres from './components/Pres/Pres';
import Caroussel from './components/Caroussel/Caroussel';
import Title from './components/Title/Title';

function App() {
  return (
    <div>
      <Nav />
      <Caroussel projects={Projects}/>
      <Title content={"Présentation"}/>
      <Pres />
      <Title content={"Compétences"}/>
      <Title content={"Projets"}/>
      <Title content={"Contact"}/>
    </div>
  );
}

export default App;

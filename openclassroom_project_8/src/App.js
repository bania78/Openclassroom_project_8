import './styles/App.css';
import Projects from './data/projects.json'
import Nav from './components/Nav/Nav';
import Pres from './components/Pres/Pres';
import Caroussel from './components/Caroussel/Caroussel';

function App() {
  return (
    <div>
      <Nav />
      <Caroussel projects={Projects}/>
      <Pres />
    </div>
  );
}

export default App;

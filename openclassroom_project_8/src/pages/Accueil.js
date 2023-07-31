import Pres from '../components/Pres/Pres';
import Caroussel from '../components/Caroussel/Caroussel';
import Title from '../components/Title/Title';
import CardList from '../components/CardList/CardList';
import Contact from '../components/Contact/Contact';
import Projects from '../data/projects.json';
import Nav from '../components/Nav/Nav';

function Accueil() {
    return (
        <div>
            <Nav adress={"./"}/>
            <Caroussel projects={Projects}/>
            <Title content={"Présentation"}/>
            <Pres />
            <Title content={"Projets"}/>
            <CardList projects={Projects}/>
            <Title content={"Me Contacter"}/>
            <Contact />
        </div>
    )
}

export default Accueil
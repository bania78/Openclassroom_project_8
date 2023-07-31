import Pres from '../components/Pres/Pres';
import Caroussel from '../components/Caroussel/Caroussel';
import Title from '../components/Title/Title';
import CardList from '../components/CardList/CardList';
import Projects from '../data/projects.json'

function Accueil() {
    return (
        <div>
            <Caroussel projects={Projects}/>
            <Title content={"Présentation"}/>
            <Pres />
            <Title content={"Projets"}/>
            <CardList projects={Projects}/>
            <Title content={"Me Contacter"}/>
        </div>
    )
}

export default Accueil
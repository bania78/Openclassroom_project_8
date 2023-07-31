import Projects from '../../data/projects.json'
import { useLoaderData } from "react-router-dom";
import './Project.css'
import TagList from '../../components/TagList/TagList';
import Title from '../../components/Title/Title';
import Description from '../../components/Description/Description';
import Nav from '../../components/Nav/Nav';

export async function getProject(id) {
    let Project = Projects.find(Project => Project.id === id);
    return Project ?? null;
}

export async function loader({ params }) {
    console.log(params)
    const project = await getProject(params.projectId);
    return { project };
}

function Project() {
    const { project } = useLoaderData();
    return (
        <div>
            <Nav adress={"../"}/>
            <div className='div_projet'>
                <img className='cover_project' src={`../${project.cover}`} alt={project.title}></img>
                <Title content={"Description du projet"}/>
                <div className='content_proj'>
                    <TagList project={project} />
                    <Description project={project} />
                </div>
            </div>
        </div>
    );
}

export default Project
import './Card.css'

function Card({ projects }) {
    return (
        projects.map(project => (
            <li key={project.id} className="Card">
                <a className='a_card' href={`/projects/${project.id}`}>
                    <article className='article_card'>
                        <img className="card_img" src={project.cover} alt={project.title}/>
                        <div className='content_card'>
                            <h3 className='h3_card'>{project.title}</h3>
                            <ul className='tag_card'>
                                { project.tags.map((tag, id) => (
                                    <li key={id} className='li_tag_card'>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                </a>
            </li>
    )));
}

export default Card
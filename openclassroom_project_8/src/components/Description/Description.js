import "./Description.css"

function Description({ project }) {
    return (
        <div className="div_des">
            <h3>Description du projet :</h3>
            { project.description.map((content) => (
                <p className="content_des">{content}</p>
            ))}
            <h3>Liens du projet :</h3>
            <p className="content_des">Site : <a className='a_des' href={project.href}>{project.href}</a></p>
            <p className="content_des">Code : <a className='a_des' href={project.code}>{project.code}</a></p>
        </div>
    )
}

export default Description
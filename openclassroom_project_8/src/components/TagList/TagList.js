import "./TagList.css"

function TagList({ project }) {
    return (
        <div className="div_tag">
            <h3>Compétences utilisées :</h3>
            <ul className='tag'>
                { project.tags.map((tag, id) => (
                    <li key={id} className='li_tag'>{tag}</li>
                ))}
            </ul>
        </div>
    )
}

export default TagList
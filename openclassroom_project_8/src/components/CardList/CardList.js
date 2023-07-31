import Card from '../Card/Card';
import './CardList.css'

function CardList({ projects }) {
    return (
        <div className="CardList">
            <ul className='ul_cardlist'>
                <Card projects={projects}/>
            </ul>
        </div>
    )
}

export default CardList
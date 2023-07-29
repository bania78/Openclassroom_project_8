import './Nav.css'

function Nav() {
    return (
        <div className='nav'>
            <ul className='ul_nav'>
                <li className='li_nav'><a className='a_nav' href={`/`}>Présentation</a></li>
                <li className='li_nav'><a className='a_nav' href={`/`}>Compétences</a></li>
                <li className='li_nav'><a className='a_nav' href={`/`}>Projets</a></li>
                <li className='li_nav'><a className='a_nav' href={`/`}>Contact</a></li>
            </ul>
        </div>
    )
}

export default Nav

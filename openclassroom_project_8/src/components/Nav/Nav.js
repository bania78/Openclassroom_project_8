import './Nav.css'

function Nav({ adress }) {
    return (
        <div className='nav'>
            <ul className='ul_nav'>
                <li className='li_nav'><a className='a_nav' href="/">Accueil</a></li>
                <li className='li_nav'><a className='a_nav' href={`${adress}assets/cv_louis.pdf`} target='blank'>Mon CV</a></li>
            </ul>
            <a className='github_access' href='https://github.com/bania78' target='blank'>
                <img className='logo_git' src={`${adress}./assets/logo.png`} alt='logo github'></img>
            </a>
        </div>
    )
}

export default Nav

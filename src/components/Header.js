import '../styles/Header.css'

function Header() {
    return (<div className="header">
        <nav>
        <img src="/logokasa.png" alt='Logo Kasa' className='logokasa' />
        <ul>
        <li>Accueil</li>
        <li>À propos</li>
        </ul>
        </nav>
        </div>
        )
    }
    export default Header
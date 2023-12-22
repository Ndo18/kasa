import { Link } from 'react-router-dom'

function Header() {
    return (<div className="header">
        <nav>
        <img src="/logokasa.png" alt='Logo Kasa' className='logokasa' />
        <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/Apropos">À propos</Link></li>
        </ul>
        </nav>
        </div>
        )
    }
    export default Header
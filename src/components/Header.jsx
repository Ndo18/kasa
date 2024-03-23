import { NavLink } from 'react-router-dom'
import logoKasa from './assets/logokasa.png'

 function Header() {
        return (<div className="header">
        <nav>
        <img src={logoKasa} alt='Logo Kasa' className='logokasa' />
        <ul>
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="/Apropos">À propos</NavLink></li>
        </ul>
        </nav>
        </div>
        )
    }
    export default Header
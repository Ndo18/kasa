import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
padding: 15px;
color: #FF6060;
text-decoration: none;
font-size: 24px;
${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: #5843E4;`}
    `
    
    function Header() {
        return (<div className="header">
        <nav>
        <img src="/logokasa.png" alt='Logo Kasa' className='logokasa' />
        <ul>
        <li><StyledLink to="/">Accueil</StyledLink></li>
        <li><StyledLink to="/Apropos">À propos</StyledLink></li>
        </ul>
        </nav>
        </div>
        )
    }
    export default Header
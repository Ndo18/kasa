import { Link } from 'react-router-dom'
import "./stylesComponents/LogementsContainer.css"

function LogementsCard({id, titre, cover}) {

    return (
        <div className="logementcard" key={ id }>
            <Link className="logementlink" to={`/Fiche-logement/${id}`} state={{logementid : id}}>
                <img src={ cover } alt="" />
                <span>{ titre }</span>
            </Link>
        </div>
    )
}
export default LogementsCard
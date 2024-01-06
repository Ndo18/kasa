import { Link } from 'react-router-dom'

function LogementsCard({id, titre, cover}) {
    return (
        <div className="logementcard" key={ id }>
            <Link to={`/Fiche-logement/${id}`}>
                <img src={ cover } alt="" />
                <span>{ titre }</span>
            </Link>
        </div>
    )
}
export default LogementsCard
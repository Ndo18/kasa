import Noslogements from '../Data/logements.json'
import LogementsCard from './LogementsCard'

function LogementsContainer () {
   
    return (
        <div className='logementsContent'>
        {
            Noslogements.map((logement) => (
            <LogementsCard key = {logement.id} id = {logement.id}
            titre = {logement.title}
            cover = {logement.cover}
            />
            ))
        }
        </div>
    )
}
export default LogementsContainer
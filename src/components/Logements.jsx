import Noslogements from '../Data/logements.json'

function Logements () {
    return (
        <div className='logementsContent'>
        {
            Noslogements.map(logement => {
                return (
                    <div className='MesCartes' key={logement.id}>
                        <img src={logement.cover} alt="" />
                        {logement.title}
                    </div>
                )
            })
        }
        </div>
        )
    }
    export default Logements
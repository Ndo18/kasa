import Noslogements from '../Data/logements.json'
import InfosLogement from './InfosLogement'
import InfosHost from './InfosHost'
import Error from './pages/Error'
import { useLocation, useParams } from 'react-router-dom'
// import { useEffect } from 'react';

function FicheLogements () {

const location = useLocation()
console.log("location", location);
console.log("locationid is :", location.state.logementid);

const {id} = useParams()
console.log("asd", id)

// useEffect(logements, [])

// function fetchlogements() {
//     Noslogements.map(async (logement) => {
//       try {
//         const response = await fetch(`logement.json/${logement.id}`);
//         if (!response.ok) {
//           throw new Error(`Erreur lors de la récupération du logement ${logement.id}`);
//         }
//         const data = await response.json();
//         console.log("Data du logement:", data);
//       } catch (error) {
//         console.error(error.message);
//       }
//     });
//   }
const logements = Noslogements.map((logement) => logement.id === parseInt(id))
console.log("aze",logements);
// console.log("add",logement.id);
if (!logements) {
    return <Error />
  }

    return (
        <div>
        <InfosLogement titre = {logements.title}/>

        <InfosHost />
        </div>
    )
}
export default FicheLogements
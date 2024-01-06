// import Noslogements from '../Data/logements.json'
import { useParams } from "react-router-dom"
import Slideshow from "../Slideshow"
import Collapse from "../Collapse"

function FicheLogements () {

    const {id} = useParams()


    return (
        <div>
            <Slideshow />
            <Collapse />
            Mes logements
        </div>
    )
}
export default FicheLogements
import { useState } from "react"
import './stylesComponents/Collapse.css'

function Collapse ({id, titre, description}) {
    
const [isOpen, setisOpen] = useState(false)
    
    return (
        <div className="monBlock monBlockapropos">
            <div className="listedescription listapropos" key={id}>
                <h3 onClick={() => setisOpen(!isOpen)}>
                {titre}
                </h3>
            </div>
        { isOpen && <div className="descriptiontext"><span>{description}</span></div> }
        </div>
    )
}
export default Collapse 
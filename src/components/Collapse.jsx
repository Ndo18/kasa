import { useState } from "react"
import './stylesComponents/Collapse.css'

function Collapse ({id, titre, description}) {
    
const [isOpen, setisOpen] = useState(false)
    
    return (
    <div className="listedescription" key={id}>
        <h3 onClick={() => setisOpen(!isOpen)}>
        {titre}
        </h3>
        { isOpen && <span>{description}</span> }
    </div>
    )
}
export default Collapse 
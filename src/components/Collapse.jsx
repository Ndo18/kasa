import { useState } from "react"

function Collapse ({id, titre, description}) {
    
const [isOpen, setisOpen] = useState(false)
    
    return (
    <div className="listedescription" key={id}>
        <h3 onClick={() => setisOpen(!isOpen)}>
        {titre}
        </h3>
        { isOpen && <p>{description}</p> }
    </div>
    )
}
export default Collapse 
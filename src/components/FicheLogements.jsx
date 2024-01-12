import React, { useEffect, useState } from 'react'
import Noslogements from '../Data/logements.json'
import { useParams } from 'react-router-dom'
import InfosLogement from './InfosLogement'
import InfosHost from './InfosHost'
import Slideshow from './Slideshow'
import Collapse from './Collapse'

function FicheLogements() {
  const { id } = useParams()
  const [logementsfilter, setLogementsFilter] = useState([])

  useEffect(() => {
    const logementsfilter = Noslogements.filter(logement => logement.id === id)
   
    setLogementsFilter(logementsfilter)
   
  }, [id])

  return (
    <div>
      {logementsfilter.map(logement => (
      <div>
        <Slideshow key={logement.pictures}
        pictures = {logement.pictures}/>

        <InfosLogement key = {logement.id} 
        titre = {logement.title} 
        location = {logement.location}
        tags = {logement.tags} />
      
        <InfosHost key = {logement.host.name}
        photoprofil = {logement.host.picture} 
        name = {logement.host.name}
        rating = {logement.rating}/>
      
      <Collapse key={logement.description} 
      titre="Description"
      description={logement.description}/>

      <Collapse key={logement.equipements} 
      titre="Équipements"
      description={logement.equipments}/>
      {/* Ajouter équipements */}

      </div>
      
      ))}
    </div>
  );
}

export default FicheLogements;

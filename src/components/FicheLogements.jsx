import React, { useEffect, useState } from 'react'
import Noslogements from '../Data/logements.json'
import { useParams } from 'react-router-dom'
import InfosLogement from './InfosLogement'
import TagsRates from './TagsRates'
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
        photoprofil = {logement.host.picture} 
        name = {logement.host.name}
        />
      
        <TagsRates key = {logement.host.name}
        tags = {<>
          {logement.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </>}
        rating = {logement.rating}/>
      
        <Collapse key={logement.description} 
        titre="Description"
        description={logement.description}/>

        <Collapse key={logement.equipements} titre="Équipements"
        description = {<ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>}/>
      </div>
      ))}
    </div>
  );
}

export default FicheLogements;

import { useState } from "react";
import './stylesComponents/Slideshow.css'
import arrowPreview from './assets/Arrow_previews.png'
import arrowNext from './assets/Arrow_next.png'

function Slideshow({ pictures }) {

    const [slides, setSlides] = useState(0)
    const totalSlides = pictures.length

    return (
      <div className="Diapo-container">
        <div  className="Diapo" key={pictures}>
            <img src={pictures[slides]} alt="Présentation logement" className="imgDiapo"/>
        </div>
{
    totalSlides > 1 && (
        <div className="btn_diapo">
            <img src={arrowPreview} alt="" onClick={() => setSlides ((slides - 1 + totalSlides) % totalSlides)} className="arrow_prev"></img>
            <img src={arrowNext} alt="" onClick={() => setSlides ((slides + 1) % totalSlides)} className="arrow_next"></img>
        </div>
    )
}
{
    totalSlides > 1 && (
        <div className="compteur">
            <p><strong>{slides+1}/{totalSlides}</strong></p>
        </div>
    )
}
      </div>
    );
  }
  export default Slideshow;
import { useState } from "react";
import './stylesComponents/Slideshow.css'

function Slideshow({ pictures }) {

    const [slides, setSlides] = useState(0)
    const totalSlides = pictures.length

    return (
      <div className="Diapo-container">
        <div  className="Diapo" key={pictures}>
            <img src={pictures[slides]} alt="test" className="imgDiapo"/>
        </div>
{
    totalSlides > 1 && (
        <div className="btn_diapo">
            <img src="/Arrow_previews.png" alt="" onClick={() => setSlides ((slides - 1 + totalSlides) % totalSlides)} className="arrow_prev"></img>
            <img src="/Arrow_next.png" alt="" onClick={() => setSlides ((slides + 1) % totalSlides)} className="arrow_next"></img>
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
import './stylesComponents/InfosLogement.css'

function InfosLogement (props) {
    return (
        <section>
            <div className="infoslogement">
                <h2>{props.titre}</h2>
                <p>{props.location}</p>
                <div className='tags'>{props.tags}</div>
            </div>
        </section>
    )
}
export default InfosLogement
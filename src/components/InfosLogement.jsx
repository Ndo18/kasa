function InfosLogement (props) {
    return (
        <section>
            <div className="titlelocation">
                <h2>{props.titre}</h2>
                <p>{props.location}</p>
                <span>{props.tags}</span>
            </div>
        <div className="tags"></div>
        </section>
    )
}
export default InfosLogement
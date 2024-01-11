function InfosHost(props) {
    return(
    <section>
        <div>
            <img src = {props.photoprofil} alt="Profile Face" />
            <span>{props.name}</span>
            <span>{props.rating}</span>
        </div>
        <div></div>
    </section>
    )
}
export default InfosHost
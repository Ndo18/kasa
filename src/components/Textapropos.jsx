import DescriptionsApropos from "../Data/textapropos.json"

function MesDescriptions (){
    return (
        <div className="boxdescription">
            {
                DescriptionsApropos.map(description => {
                    return (
                        <div className="listedescription" key={description.id}>
                            <h3>{description.titre}</h3>
                            <p>{description.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default MesDescriptions
import './stylesComponents/TagsRates.css'

function TagsRates(props) {
    return(
    <div className='tagsrates'>
        <div className='tags'>
            {props.tags}
        </div>
        <div className="ratestars">
            <p>{props.rating}</p>
        </div>
    </div>
    )
}
export default TagsRates
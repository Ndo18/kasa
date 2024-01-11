function Slideshow ({pictures}) {
console.log(pictures);
    return (
        <div>
            <img src={pictures} alt="test" />
        </div>
    )
}
export default Slideshow
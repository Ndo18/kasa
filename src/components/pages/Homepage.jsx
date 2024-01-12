import Banner from "../Banner"
import LogementsContainer from "../LogementsContainer"

function Homepage() {
    return (
        <div>
            <Banner>
               <div className="banner-commun banner1">
               <h1>Chez vous, partout et ailleurs</h1>
               </div>
            </Banner>
            <LogementsContainer />
        </div>
    )
}
export default Homepage
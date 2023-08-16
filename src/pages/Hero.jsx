import Carousel from "../layouts/Carousel"
import CitiesArray from "../Utils/citiesMockup"
import planeDeparture from "/planedeparture.svg"
import splitArray from "../Utils/splitArray.js";
import { Link } from "react-router-dom";

const fourCities = splitArray(CitiesArray, 4)

export default function Hero() {

    return (
        <main>
            <section>
                <h1>Find <span className='acent'>your perfect </span> trip,</h1>
                <h3>designed by insiders who know and love their cities!</h3>
                <Link to='cities'>
                    <button>Start Now <img src={planeDeparture} alt="planeDeparture" /></button>
                </Link>
            </section>
            <aside>
                <h1>Popular Mytineraries</h1>
                <Carousel>
                {
                    fourCities.map((array,indexMap)=>{
                        return <div className="grid" key={indexMap}>
                            <div className="heroImg">
                                <img loading="eager" src={array[0].photo} alt={array[0].city} />
                                <h3>{array[0].city}</h3>
                                <h5>{array[0].country}</h5>
                            </div>
                            <div className="heroImg">
                                <img loading="eager" src={array[1].photo} alt={array[1].city} />
                                <h3>{array[1].city}</h3>
                                <h5>{array[1].country}</h5>
                            </div>
                            <div className="heroImg">
                                <img loading="eager" src={array[2].photo} alt={array[2].city} />
                                <h3>{array[2].city}</h3>
                                <h5>{array[2].country}</h5>
                            </div>
                            <div className="heroImg">
                                <img loading="eager" src={array[3].photo} alt={array[3].city} />
                                <h3>{array[3].city}</h3>
                                <h5>{array[3].country}</h5>
                            </div>
                        </div>
                    })
                }
                </Carousel>
            </aside>
        </main>
    )
}

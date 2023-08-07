// import { useEffect } from "react"
import Carousel from "../layouts/Carousel"
import Cities from "../Utils/citiesMockup"
import splitArray from "../Utils/splitArray.js";

const fourCities = splitArray(Cities, 4)

export default function Hero() {

    return (
        <main>
            <section>

                <h1>Find the perfect destination</h1>
                <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <button>View More</button>
            </section>
                <Carousel>
                {
                    fourCities.map((array,indexMap)=>{
                        return <div className="grid" key={indexMap}>
                            {/* {array.map((item)=>{ */}
                                <img className="heroImg" loading="eager" src={array[0].photo} alt={array[0].city} />
                                <img className="heroImg" loading="eager" src={array[1].photo} alt={array[1].city} />
                                <img className="heroImg" loading="eager" src={array[2].photo} alt={array[2].city} />
                                <img className="heroImg" loading="eager" src={array[3].photo} alt={array[3].city} />
                                {/* })} */}
                            
                            </div>
                    })
                }
                </Carousel>
        </main>
    )
}

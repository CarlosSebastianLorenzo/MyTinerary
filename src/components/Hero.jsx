// import { useEffect } from "react"
import Carousel from "../layouts/Carousel"
import Cities from "../Utils/citiesMockup"

export default function Hero() {

    return (
        <main>
            <section>
                <h1>Find the perfect destination</h1>
                <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <button>View More</button>
            </section>
                <Carousel>
                {Cities.map((city,indexMap) => {
                    return <img className="heroImg" loading="eager" key={indexMap} src={city.photo} alt={city.city} />
                    }
                )}
                </Carousel>
        </main>
    )
}

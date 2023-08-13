/* eslint-disable no-unreachable */
import Cities from "../Utils/citiesMockup"

const Card = () => {
    return (
        <>
            {Cities.map((city, indexMap) => {
                return 
                <div key={indexMap}>
                    <div style={'backgroundImage:'+city.photo}></div>
                    <h1>{city.city}</h1>
                    <h2>{city.country}</h2>
                    <p>{city.description}</p>
                </div>
            })
            }
        </>
    )
}

export default Card

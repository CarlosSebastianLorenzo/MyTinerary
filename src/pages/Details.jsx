/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { apiURL } from "../Utils/apiURL"
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import UnderConstruction from "../components/UnderConstruction"


const Details = () => {
    const params = useParams()
    const navigate = useNavigate()
    let [infoCity, setInfoCity] = useState({})

    useEffect(() => {
        document.title = params.id + " - MyTinerary"
    },[])

    useEffect(() => {
        fetch(apiURL+"cities/"+params.id)
        .then(response => response.json())
        .then(data => setInfoCity(data.response))
    },[])

    return (
        <>
            <div className="details">
                <div style={{backgroundImage: `url(${infoCity.photo})`}}>
                    <h1 className='acent'>{infoCity.city}</h1>
                    <h2>{infoCity.country}</h2>
                </div>
                <span>
                    <p>Population: <span className="acent">{infoCity.population}</span></p>
                    <p>Fundation: <span className="acent">{infoCity.fundation}</span></p>
                    <p>Featured Locations: <span className="acent">{infoCity.featuredLocation}</span></p>
                </span>
                <p>{infoCity.description}</p>
                <div style={{backgroundImage: `url(${infoCity.photo})`}}>
                    <button onClick={()=>navigate(-1)}>
                        Go Back to Cities
                        <FaPersonWalkingLuggage/>
                    </button>
                </div>
                <UnderConstruction/>
            </div>
        </>
    )
}

export default Details

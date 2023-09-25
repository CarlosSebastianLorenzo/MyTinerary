/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux"
import { readOneCity, readItinerariesByCity } from "../Redux/Actions/CitiesAction.js"
import Itinerary from "../components/Itinerary";
import NoItinerariesFound from "../components/NoItinerariesFound";

const Details = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const infoCity = useSelector(store => store.readOneCityReducer.city)
    const Itineraries = useSelector(store => store.readItinerariesByCityReducer.itineraries)
    const population = infoCity.population ? infoCity.population.toLocaleString('en-US') : ''

    const inputDate = infoCity.fundation ? infoCity.fundation : ''
    const [year, month, day] = inputDate.split("-");
    const formattedDate = `${month}/${day}/${year}`;

    useEffect(()=>{
        dispatch(readOneCity(params.id))
        dispatch(readItinerariesByCity(params.id))
    },[])

    useEffect(() => {
        document.title = params.id + " - MyTinerary"
    },[])

    if (infoCity == "loading") {
        return (
            <main className="citiesMain">
                <span className="loader">Loading...</span>
            </main>
        )
    }

    return (
        <div className="details">
            <div style={{backgroundImage: `url(${infoCity.photo})`}}>
                <h1 className='acent'>{infoCity.city}</h1>
                <h2>{infoCity.country}</h2>
            </div>
            <span>
                <p>Population: <span className="acent">{population}</span></p>
                <p>Fundation: <span className="acent">{formattedDate}</span></p>
                <p>Featured Locations: <span className="acent">{infoCity.featuredLocation}</span></p>
            </span>
            <p>{infoCity.description}</p>
            <div style={{backgroundImage: `url(${infoCity.photo})`}}>
                <button onClick={()=>navigate(-1)}>
                    Go Back to Cities
                    <FaPersonWalkingLuggage/>
                </button>
            </div>
            <div className="itineraries">
                {
                    Itineraries == '' ? 
                        <NoItinerariesFound/>
                    : (Itineraries == "loading") ?
                    <span className="loader">Loading...</span>
                    : 
                    Itineraries.map((itinerary, indexMap)=>{
                        return <Itinerary data={itinerary} key={indexMap}/>
                    })
                }
            </div>
        </div>  
    )
}

export default Details

import { useNavigate } from "react-router-dom"
import searching from "/searching.svg"
import { FaPersonWalkingLuggage } from "react-icons/fa6";


const NoItinerariesFound = () => {

    const navigate = useNavigate()

    return (
        <main>
        <section style={{ alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                <h1>No <span className="acent">Itineraries </span>Found Yet</h1>
                <h3>Whoops... There are currently no itineraries available for this city</h3>
                <button onClick={()=>navigate(-1)}>
                    Go Back to Cities
                    <FaPersonWalkingLuggage/>
                </button>
        </section>
        <aside style={{minHeight: '10vh', height: '20vh'}}>
            <img style={{maxWidth: '90%', maxHeight: '60vh'}} src={searching} alt="woman searching data" />
        </aside>
        </main>
    )
}

export default NoItinerariesFound

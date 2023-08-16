import { NavLink } from "react-router-dom"
import personWalkingLuggage from "/personwalkingluggage.svg"
import manlost from "/manlost.svg"

const Error404 = () => {
    return (
        <main>
        <section style={{ alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                <h1>ERROR <span className="acent">404</span></h1>
                <h3>Sorry, page not found</h3>
                <NavLink to="/"><button>Go Back Home 
                <img src={personWalkingLuggage} alt="personWalkingLuggage" /></button></NavLink>
        </section>
        <aside style={{minHeight: '10vh', height: 'fitContent'}}>
            <img style={{maxWidth: '90vw'}} src={manlost} alt="girl walking" />
        </aside>
        </main>
    )
}

export default Error404

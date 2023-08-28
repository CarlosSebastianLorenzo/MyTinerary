import { NavLink } from "react-router-dom"
import underconstruction from "/underconstruction.svg"
import { FaPersonWalkingLuggage } from "react-icons/fa6";


const UnderConstruction = () => {
    return (
        <main>
        <section style={{ alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                <h1>Page <span className="acent">Under </span>Construction</h1>
                <h3>Content will be available soon</h3>
                <NavLink to="/"><button>Go Back Home 
                <FaPersonWalkingLuggage/></button></NavLink>
        </section>
        <aside style={{minHeight: '10vh', height: '20vh'}}>
            <img style={{maxWidth: '90%', maxHeight: '60vh'}} src={underconstruction} alt="workers construction house" />
        </aside>
        </main>
    )
}

export default UnderConstruction

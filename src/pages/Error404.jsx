import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import manlost from "/manlost.svg"

const Error404 = () => {

    useEffect(() =>{
        document.title = "Error 404: MyTinerary"
    },[])

    return (
        <main style={{height: '100vh', padding: '2rem'}}>
        <section style={{ alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                <h1>ERROR <span className="acent">404</span></h1>
                <h3>Sorry, page not found</h3>
                <NavLink to="/">
                    <button>
                        Go Back Home 
                        <FaPersonWalkingLuggage/>
                    </button>
                </NavLink>
        </section>
        <aside style={{minHeight: '10vh', height: 'fitContent'}}>
            <img style={{maxWidth: '100%'}} src={manlost} alt="girl walking" />
        </aside>
        </main>
    )
}

export default Error404

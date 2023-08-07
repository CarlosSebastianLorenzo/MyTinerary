import { NavLink } from "react-router-dom"

const Error404 = () => {
    return (
        <main style={{ justifyContent: 'center', flexDirection: 'column' }}>
                <h1>
                    ERROR 404
                </h1>
                <NavLink to="/">Home</NavLink>
        </main>
    )
}

export default Error404

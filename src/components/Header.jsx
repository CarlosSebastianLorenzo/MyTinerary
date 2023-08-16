import { NavLink, Link } from "react-router-dom"
import user from "/user.svg"

function Header() {
    return (
        <header>
            <Link to="/">
                <img src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000931_plane_flying_logo_design_free_online_travel_logo_maker-06.png" alt="logo" />
                <h2>My Tinerary</h2>
            </Link>
            <nav>
                <ul>
                    <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to="/cities">Cities</NavLink>
                    </li>
                    <li>
                    <button><img src={user} alt="user" />Login</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
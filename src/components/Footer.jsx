import { NavLink } from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <ul>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/cities">Cities</NavLink>
                </li>
            </ul>
            <p className="copyright">Copyright 2023© Lorenzo Carlos Sebastian - All Rights Reserved</p>
        </footer>
    )
}
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { NavLink, Link, useNavigate } from "react-router-dom"
import BurguerMenu from "./BurguerMenu"
import {FaUser} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { userLogOut } from "../Redux/Actions/UserAction.js";

function Header() {
    const user = useSelector(store => store.userSignUpReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [navOpen, setNavOpen] = useState(false)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    }
    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])

    const logIn = async () => {
        setNavOpen(!navOpen)
        await dispatch(userLogOut())
        navigate('/signin')
    }

    return (
        <header>
            <Link to="/">
                <img src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000931_plane_flying_logo_design_free_online_travel_logo_maker-06.png" alt="logo" />
                <h2>My Tinerary</h2>
            </Link>
            <nav className={ navOpen ? 'navShown' : 'navHidden'}>
                <ul>
                    <li>
                    <NavLink onClick={()=>setNavOpen(!navOpen)} className={({isActive})=> isActive ? 'active' : ''} to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink onClick={()=>setNavOpen(!navOpen)} className={({isActive})=> isActive ? 'active' : ''} to="/cities">Cities</NavLink>
                    </li>
                    { user && Object.keys(user).length !== 0 ?
                        <li style={{display: 'flex', gap: '1em'}}>
                            <button onClick={logIn}>
                                <img src={user.photo} alt={user.name} style={{borderRadius: '50%'}} />
                                Logout
                            </button>
                        </li>
                        : 
                        <li>
                        <button onClick={logIn}><FaUser/>Login</button>
                        </li>
                    }
                </ul>
            </nav>
            <BurguerMenu condition={navOpen} fn={()=>setNavOpen(!navOpen)}/>
        </header>
    )
}

export default Header
import girlMapWorld from "/signup.svg"
import { ImGoogle } from "react-icons/im";
import { LuLogIn } from "react-icons/lu";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { userSignUp } from "../Redux/Actions/UserAction.js";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const repeatPassword = useRef()
    const countrySelected = useRef()
    const [countries, setCountries] = useState([])
    const [showPassword, setShowPassword] = useState(false)
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        fullName: "",
        photo: ""
    })

    useEffect(()=>{
        axios.get('src/Utils/countriesMockup.json')
        .then(response => {
            let countriesArray = response.data.map(e => e.name.common)
            setCountries(countriesArray)
        })
    },[])

    const handleChangeUserData = (e) =>{
        setUserData({...userData, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userData.password !== repeatPassword.current.value) { 
            toast.error("Passwords must be the same")
            return 
        }
        let data = userData
        if (countrySelected.current.value != "noCountry" ){
            data = {...userData, country: countrySelected.current.value}
            console.log(data)
        }
        const actionResult = await dispatch(userSignUp({...data}));
        const result = await unwrapResult(actionResult)
        if(result.token) {navigate('/')}
    }
    
    const login = useGoogleLogin ({
        onSuccess: async tokenResponse => {
            const infoUser = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: 'Bearer '+ tokenResponse.access_token
                }
            })
            const data = {
                email: infoUser.data.email,
                password: infoUser.data.family_name+import.meta.env.VITE_HASH_PASSWORD,
                fullName: infoUser.data.name,
                photo: infoUser.data.picture
            }
            const actionResult = await dispatch(userSignUp(data))
            const result = await unwrapResult(actionResult)
            if(result.token) {navigate('/')}
        }
    });

    return (
        <main style={{minHeight: '100vh'}}>
            <section style={{ alignItems: 'center', flexDirection: 'column', gap: 0}}>
                <div style={{display: 'flex', height: '1.5em', alignItems: 'center', gap: '.5em'}}>
                    <img style={{maxHeight: '100%'}}src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000931_plane_flying_logo_design_free_online_travel_logo_maker-06.png" alt="logo" />
                    <h4>My Tinerary</h4>
                </div>
                <h1>Sign <span className="acent">Up</span></h1>
                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection: 'column', gap: '1.5em', padding: '1em'}}>
                    <div>
                        <input type="text" name="email" 
                            placeholder=" " value={userData.email} 
                            onChange={(e)=>handleChangeUserData(e)}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder=" " autoComplete="on"
                            value={userData.password}
                            onChange={(e)=>handleChangeUserData(e)}/>
                        <label htmlFor="password">Password</label>
                        {showPassword ? <FaEyeSlash className="eye" onClick={()=>setShowPassword(!showPassword)} /> 
                        : <FaEye className="eye" onClick={()=>setShowPassword(!showPassword)}/>}
                    </div>
                    <div>
                        <input name="repeatPassword"
                            ref={repeatPassword}
                            type={showPassword ? "text" : "password"}
                            placeholder=" " 
                            autoComplete="off"
                            />
                        <label htmlFor="repeatPassword">Confirm Password</label>
                        {showPassword ? <FaEyeSlash className="eye" onClick={()=>setShowPassword(!showPassword)}/> 
                        : <FaEye className="eye" onClick={()=>setShowPassword(!showPassword)}/>}
                    </div>
                    <div>
                        <input type="text" name="fullName" 
                            placeholder=" " value={userData.fullName} 
                            onChange={(e)=>handleChangeUserData(e)}/>
                        <label htmlFor="fullName">Full Name</label>
                    </div>
                    <div>
                        <input type="text" name="photo" 
                            placeholder=" " value={userData.photo} 
                            onChange={(e)=>handleChangeUserData(e)}/>
                        <label htmlFor="photo">Profile Photo URL</label>
                    </div>
                    <div>
                        <select ref={countrySelected} name="selectCountry">
                            {countries.map((country, indexMap)=>{
                                return <option key={indexMap} value={country}>{country}</option>
                            })}
                            <option value="noCountry" defaultValue>Select a Country</option>
                        </select>
                        <label htmlFor="selectCountry">Select a Country</label>
                    </div>
                    <button type="submit" style={{padding:'.5em', fontSize: '1.2em', }}>
                        Sign Up <LuLogIn/>
                    </button>
                    <button onClick={() => login()} type="button" style={{padding:'.7em', fontSize: '1em', zIndex: '1'}}>
                        Sign Up with Google <ImGoogle/>
                    </button>
                </form>
                    <p className="link">Already have an account? <Link to='/register/signin' className="acent link">Sign In</Link></p>
            </section>
            <aside style={{minHeight: '10vh', height: 'fitContent'}}>
                <img style={{maxWidth: '100%'}} src={girlMapWorld} alt="girl map of the world" />
            </aside>
        </main>
    )
}

export default SignUp

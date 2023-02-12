import girlMapWorld from "/signup.svg"
import { ImGoogle } from "react-icons/im";
import { LuLogIn } from "react-icons/lu";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import axios from "axios";
import { userSignUp } from "../Redux/Actions/UserAction.js";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        fullName: "",
        photo: ""
    })

    const handleChangeUserData = (e) =>{
        setUserData({...userData, [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const actionResult = await dispatch(userSignUp({...userData}));
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
                password: infoUser.data.family_name+"@1V",
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
                            type={showPassword ? "text" : "password"}
                            placeholder=" " 
                            autoComplete="off"
                            />
                        <label htmlFor="repeatPassword">Repeat Password</label>
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
                    <button type="submit" style={{padding:'.5em', fontSize: '1.2em', }}>
                        Sign Up <LuLogIn/>
                    </button>
                    <button onClick={() => login()} type="button" style={{padding:'.7em', fontSize: '1em', zIndex: '1'}}>
                        Sign Up with Google <ImGoogle/>
                    </button>
                </form>
                    <p className="link">Already have an account? <Link to='/signin' className="acent link">Sign In</Link></p>
            </section>
            <aside style={{minHeight: '10vh', height: 'fitContent'}}>
                <img style={{maxWidth: '100%'}} src={girlMapWorld} alt="girl map of the world" />
            </aside>
        </main>
    )
}

export default SignUp

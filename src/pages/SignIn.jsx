/* eslint-disable react/no-unescaped-entities */
import manLogin from "/login.svg";
import { ImGoogle } from "react-icons/im";
import { LuLogIn } from "react-icons/lu";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from "react-redux";
import { userSignIn } from "../Redux/Actions/UserAction.js";
import { useRef, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const email = useRef()
    const password = useRef()

    const loginWithGoogle = useGoogleLogin ({
        onSuccess: async tokenResponse => {
            console.log(tokenResponse)
            const infoUser = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: 'Bearer '+ tokenResponse.access_token
                }
            })
            const data = {
                email: infoUser.data.email,
                password: infoUser.data.family_name+import.meta.env.VITE_HASH_PASSWORD
            }
            const actionResult = await dispatch(userSignIn(data))
            const result = await unwrapResult(actionResult)
            if(result.token) {navigate('/')}
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const actionResult = await dispatch(userSignIn({
            email: email.current.value,
            password: password.current.value
        }))
        const result = await unwrapResult(actionResult)
        if(result.token) {navigate('/')}
    }

    return (
        <main style={{height: '100vh'}}>
            <section style={{ alignItems: 'center', flexDirection: 'column', gap: 0}}>
                <div style={{display: 'flex', height: '1.5em', alignItems: 'center', gap: '.5em'}}>
                    <img style={{maxHeight: '100%'}}src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000931_plane_flying_logo_design_free_online_travel_logo_maker-06.png" alt="logo" />
                    <h4>My Tinerary</h4>
                </div>
                <h1>Log <span className="acent">In</span></h1>
                <form onSubmit={handleSubmit} style={{display:'flex', flexDirection: 'column', gap: '1.5em', padding: '1em'}}>
                    <div>
                        <input ref={email} type="text" name="email" placeholder=" "/>
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div>
                        <input ref={password} 
                        type={showPassword ? "text" : "password"}
                        autoComplete="on"
                        name="password" placeholder=" "/>
                        <label htmlFor="password">Password</label>
                        {showPassword ? <FaEyeSlash className="eye" onClick={()=>setShowPassword(!showPassword)} /> 
                        : <FaEye className="eye" onClick={()=>setShowPassword(!showPassword)}/>}
                    </div>
                    <button type="submit" style={{padding:'.5em', fontSize: '1.2em'}}>
                        Log In <LuLogIn/>
                    </button>
                    <button onClick={() => loginWithGoogle()} type="button" style={{padding:'.7em', fontSize: '1em'}}>
                        Log In with Google <ImGoogle/>
                    </button>
                </form>
                <p className="link">Don't have an account? <Link to='/register' className="acent link">Sign Up</Link></p>
                <p className="link">or <Link to='/' className="acent link">Continue</Link> without logging in</p>
            </section>
            <aside style={{minHeight: '10vh', height: 'fitContent'}}>
                <img style={{maxWidth: '100%', zIndex: '-1'}} src={manLogin} alt="man select map" />
            </aside>
        </main>
    )
}

export default SignIn

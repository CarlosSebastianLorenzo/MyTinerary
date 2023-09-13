import { createReducer } from "@reduxjs/toolkit";
import { userSignUp, userSignIn, logInWithToken, userLogOut } from "../Actions/UserAction.js";
import localSto from "../../Utils/localStorage.js";
import { toast } from "react-toastify";

const initialState = {
    user : {},
    token : "",
    isOnline : false
}

export const userSignUpReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(userSignUp.fulfilled, (store,action)=>{
            localSto.set("token", action.payload.token)
            toast.success('Welcome to MyTynerary ' + action.payload.response.fullName);   
            return {
                ...store,
                user: action.payload.response,
                token: action.payload.token,
                isOnline: true
            }
        })
        .addCase(userSignUp.rejected, (store)=>{
            return {
                ...store,
                user: {},
                token: "",
                isOnline: false
            }
        })
        .addCase(userSignIn.fulfilled, (store,action)=>{
            localSto.set("token", action.payload.token)
            toast.success('Welcome Again ' + action.payload.response.fullName);   
            return {
                ...store,
                user: action.payload.response,
                token: action.payload.token,
                isOnline: true
            }
        })
        .addCase(userSignIn.rejected, (store)=>{
            return {
                ...store,
                user: {},
                token: "",
                isOnline: false
            }
        })
        .addCase(logInWithToken.fulfilled, (store,action)=>{
            return {
                ...store,
                user: action.payload.response,
                token: action.payload.token,
                isOnline: true
            }
        })
        .addCase(logInWithToken.pending, (store)=>{
            return {
                ...store,
                user: {},
                token: "",
                isOnline: true
            }
        })
        .addCase(logInWithToken.rejected, (store)=>{
            return {
                ...store,
                user: {},
                token: "",
                isOnline: false
            }
        })
        .addCase(userLogOut, (store)=>{
            localSto.remove("token")
            return {
                ...store,
                user: {},
                token: "",
                isOnline: false
            }
        })
})
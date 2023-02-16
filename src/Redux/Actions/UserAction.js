import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";
import localSto from "../../Utils/localStorage.js";

export const userSignUp = createAsyncThunk('userSignUp', async (userData)=>{
    try {
        const res = await axios.post(apiURL+'auth/signUp',{
            ...userData
        })
        return res.data
    } catch (error) {
        console.log(error);
        return {}
    }
})

export const userSignIn = createAsyncThunk('userSignIn', async (userData)=>{
    try {
        const res = await axios.post(apiURL+'auth/signIn',{
            ...userData
        })
        return res.data
    } catch (error) {
        console.log(error);
        return {}
    }
})

export const logInWithToken = createAsyncThunk('logInWithToken', async ()=>{
    try {
        const token = localSto.getText("token")
        const res = await axios.get(apiURL+'auth/token',{
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        return res.data
    } catch (error) {
        console.log(error);
        return {}
    }
})

export const userLogOut = createAction('userLogOut', ()=>{
    return {
        payload: ""
    }
})
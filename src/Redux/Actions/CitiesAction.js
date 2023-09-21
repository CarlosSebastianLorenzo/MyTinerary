import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";
import { toast } from "react-toastify";

export const readAllCities = createAsyncThunk('readAllCities', async ()=>{
    try {
        const cities = (await axios.get(apiURL+"cities")).data.response
        return cities
    } catch (error) {
        console.log(error);
        toast.error("ups, Sorry, couldn't connect to the server");
        throw new Error(error)
    }
})

export const filterCities = createAction('filterCities', (search)=>{
    return {
        payload: search
    }
})

export const readOneCity = createAsyncThunk('readOneCity', async (name)=>{
    try {
        const res = await axios.get(apiURL+"cities/"+name)
        return res.data.response
    } catch (error) {
        console.log(error);
        toast.error("ups, Sorry, couldn't connect to the server");
        throw new Error(error)
    }
})
export const readItinerariesByCity = createAsyncThunk('readItinerariesByCity', async (city)=>{
    try {
        const res = await axios.get(apiURL+"itineraries/"+city)
        return res.data.response
    } catch (error) {
        console.log(error);
        toast.error("ups, Sorry, couldn't connect to the server");
        throw new Error(error)
    }
})
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiURL } from "../../Utils/apiURL";
import axios from "axios";

export const readAllCities = createAsyncThunk('readAllCities', async (inputSearch)=>{
    try {
        const res = await axios.get(apiURL+"cities")
        const search = inputSearch.toLowerCase().trim()
        const filteredCities = res.data.response.filter(c => c.city.toLowerCase().trim().startsWith(search))
        return filteredCities
    } catch (error) {
        console.log(error);
        return []
    }
})
export const readOneCity = createAsyncThunk('readOneCity', async (name)=>{
    try {
        const res = await axios.get(apiURL+"cities/"+name)
        return res.data.response
    } catch (error) {
        console.log(error);
        return []
    }
})
export const readItinerariesByCity = createAsyncThunk('readItinerariesByCity', async (city)=>{
    try {
        const res = await axios.get(apiURL+"itineraries/"+city)
        return res.data.response
    } catch (error) {
        console.log(error);
        return []
    }
})
import { createReducer } from "@reduxjs/toolkit";
import { readAllCities } from "../Actions/CitiesAction.js";

const initialState = {
    cities : []
}

const readAllCitiesReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(readAllCities.fulfilled, (store,action)=>{
            const newCities = { ...store, cities: action.payload}
            return newCities
        })
})

export default readAllCitiesReducer
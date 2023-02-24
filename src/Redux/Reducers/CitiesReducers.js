import { createReducer } from "@reduxjs/toolkit";
import { readAllCities, readOneCity } from "../Actions/CitiesAction.js";

const initialState = {
    cities : [],
    city : {}
}

export const readAllCitiesReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(readAllCities.fulfilled, (store,action)=>{
            const newCities = { ...store, cities: action.payload}
            return newCities
        })
})

export const readOneCityReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(readOneCity.fulfilled, (store,action)=>{
            const newCity = { ...store, city: action.payload}
            return newCity
        })
})
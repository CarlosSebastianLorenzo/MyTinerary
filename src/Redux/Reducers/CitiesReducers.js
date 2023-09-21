import { createReducer } from "@reduxjs/toolkit";
import { readAllCities, readOneCity, readItinerariesByCity, filterCities } from "../Actions/CitiesAction.js";

const initialState = {
    cities : [],
    filteredCities : [],
    city : {},
    itineraries: []
}

export const readAllCitiesReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(readAllCities.fulfilled, (store,action)=>{
            return {
                ...store,
                cities: action.payload,
                filteredCities: action.payload
            }
        })
        .addCase(readAllCities.pending, (store)=>{
            return {
                ...store,
                filteredCities: "loading"
            }
        })
        .addCase(readAllCities.rejected, (store)=>{
            return {
                ...store,
                filteredCities: []
            }
        })
        .addCase(filterCities, (store,action)=>{
            const search = action.payload.toLowerCase().trim()
            const newFilteredCities = store.cities.filter(c => c.city.toLowerCase().trim().startsWith(search))
            return { 
                ...store,
                filteredCities: newFilteredCities
            }
        })
})

export const readOneCityReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(readOneCity.fulfilled, (store,action)=>{
            const newCity = { ...store, city: action.payload}
            return newCity
        })
        .addCase(readOneCity.pending, (store)=>{
            return {
                ...store,
                city: "loading"
            }
        })
        .addCase(readOneCity.rejected, (store)=>{
            return {
                ...store,
                city: {}
            }
        })
})

export const readItinerariesByCityReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase(readItinerariesByCity.fulfilled, (store,action)=>{
            const newItineraries = { ...store, itineraries: action.payload}
            return newItineraries
        })
        .addCase(readItinerariesByCity.pending, (store)=>{
            return {
                ...store,
                itineraries: "loading"
            }
        })
        .addCase(readItinerariesByCity.rejected, (store)=>{
            return {
                ...store,
                itineraries: []
            }
        })
})
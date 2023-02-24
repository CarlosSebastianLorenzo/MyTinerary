import { configureStore } from '@reduxjs/toolkit';
import {readAllCitiesReducer, readOneCityReducer} from './Reducers/CitiesReducers.js';

const store = configureStore({
    reducer: {
        readAllCitiesReducer : readAllCitiesReducer,
        readOneCityReducer : readOneCityReducer
    }
})

export default store
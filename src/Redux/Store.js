import { configureStore } from '@reduxjs/toolkit';
import {readAllCitiesReducer, readOneCityReducer, readItinerariesByCityReducer} from './Reducers/CitiesReducers.js';
import { userSignUpReducer } from './Reducers/UserReducer.js';

const store = configureStore({
    reducer: {
        readAllCitiesReducer : readAllCitiesReducer,
        readOneCityReducer : readOneCityReducer,
        readItinerariesByCityReducer : readItinerariesByCityReducer,
        userSignUpReducer: userSignUpReducer
    }
})

export default store

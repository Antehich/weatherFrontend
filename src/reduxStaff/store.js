import {configureStore} from "@reduxjs/toolkit";
import cityReducer from './citySlice';
import locationReducer from './locationSlice';
import currentWeatherReducer from "./currentWeatherSlice";
import futureWeatherReducer from "./futureWeatherSlice";

export default configureStore({
    reducer: {
        city: cityReducer,
        location: locationReducer,
        currentWeather: currentWeatherReducer,
        futureWeather: futureWeatherReducer,
    },
})
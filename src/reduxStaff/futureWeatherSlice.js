import {createSlice} from "@reduxjs/toolkit";

export const futureWeatherSlice = createSlice({
    name: 'futureWeather',
    initialState: {
        value: [],
    },
    reducers: {
        futureWeatherSetter: (state, data) => {
            state.value = data.payload
        },
    },
})

export const { futureWeatherSetter } = futureWeatherSlice.actions

export default futureWeatherSlice.reducer


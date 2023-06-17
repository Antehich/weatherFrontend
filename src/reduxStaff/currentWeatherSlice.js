import {createSlice} from "@reduxjs/toolkit";

export const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState: {
        value: {},
    },
    reducers: {
        currentWeatherSetter: (state, data) => {
            state.value = data.payload
        },
    },
})

export const { currentWeatherSetter } = currentWeatherSlice.actions

export default currentWeatherSlice.reducer


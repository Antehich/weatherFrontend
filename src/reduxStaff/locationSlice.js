import {createSlice} from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: 'location',
    initialState: {
        value: {},
    },
    reducers: {
        locationSetter: (state, data) => {
            state.value = data.payload
        },
    },
})

export const { locationSetter } = locationSlice.actions

export default locationSlice.reducer


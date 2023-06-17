import {createSlice} from "@reduxjs/toolkit";

export const citySlice = createSlice({
    name: 'city',
    initialState: {
        value: 'Tuapse',
    },
    reducers: {
        citySetter: (state, data) => {
            state.value = data.payload
        },
    },
})

export const { citySetter } = citySlice.actions

export default citySlice.reducer


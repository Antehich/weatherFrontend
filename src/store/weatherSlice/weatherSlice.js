import { createSlice } from '@reduxjs/toolkit';

import patchStateReducer from '../../utils/patchStateReducer';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: 'Tuapse',
    location: null,
    currentWeather: null,
    futureWeather: null,
  },
  reducers: {
    patchState: patchStateReducer,
  },
});

export const { patchState } = weatherSlice.actions;
export default weatherSlice.reducer;

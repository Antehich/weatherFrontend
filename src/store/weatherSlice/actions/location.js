import { createAsyncThunk } from '@reduxjs/toolkit';

import { getWeatherLocation } from '../../../clients/forecaClient';
import { patchState } from '../weatherSlice';

export const getLocation = createAsyncThunk(
  'weather/getLocation',
  async (payload, { getState, dispatch }) => {
    const { weather } = getState();

    const location = await getWeatherLocation(weather.city);
    dispatch(patchState({ location }));
  },
);

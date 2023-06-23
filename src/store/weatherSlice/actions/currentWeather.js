import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCurrentWeather } from '../../../clients/forecaClient';
import { patchState } from '../weatherSlice';

export const getWeather = createAsyncThunk(
  'weather/getCurrentWeather',
  async (payload, { getState, dispatch }) => {
    const { weather } = getState();

    const currentWeather = await getCurrentWeather(weather.location);

    dispatch(patchState({ currentWeather }));
  },
);

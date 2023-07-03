import { createAsyncThunk } from '@reduxjs/toolkit';

import { getFutureWeather } from '../../../clients/forecaClient';
import { patchState } from '../weatherSlice';

export const getForecast = createAsyncThunk(
  'weather/getFutureWeather',
  async (payload, { getState, dispatch }) => {
    const { weather } = getState();

    const futureWeather = await getFutureWeather(weather.location);

    dispatch(patchState({ futureWeather }));
  },
);

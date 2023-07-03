import { createAsyncThunk } from '@reduxjs/toolkit';

import { getWeather } from './currentWeather';
import { getForecast } from './futureWeather';
import { getLocation } from './location';

export const getWeatherData = createAsyncThunk(
  'weather/getWeatherData',
  async (payload, { dispatch }) => {
    await dispatch(getLocation());
    await dispatch(getWeather());
    await dispatch(getForecast());
  },
);

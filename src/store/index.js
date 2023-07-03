import { configureStore } from '@reduxjs/toolkit';

import { weatherSlice } from './weatherSlice/weatherSlice';

export default configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
    thunk: true,
  }),
  reducer: {
    weather: weatherSlice.reducer,
  },
});

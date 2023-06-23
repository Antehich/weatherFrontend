import axios from 'axios';

const forecaInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});
export const getWeatherLocation = async (city) => {
  const { data } = await forecaInstance.get(`/location/search/${city}`);
  return data.locations.length === 0 ? 'Not found' : data.locations[0].id;
};

export const getCurrentWeather = async (location) => {
  const { data } = await forecaInstance.get(`/current/${location}`);

  return data.current;
};

export const getFutureWeather = async (location) => {
  const { data } = await forecaInstance.get(`/forecast/daily/${location}&dataset=full`);

  return data.forecast;
};

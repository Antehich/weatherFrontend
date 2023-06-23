import './App.css';
import React, { useEffect, useState } from 'react';

import { BallTriangle } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

import LeftPanel from './components/LeftPanel';
import LocationNotFound from './components/LocationNotFound';
import RightPanel from './components/RightPanel';
import { getWeatherData } from './store/weatherSlice/actions/getWeatherData';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const {
    city, location, currentWeather, futureWeather,
  } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getWeatherData()).then(() => setIsLoading(false));
  }, [city, dispatch, location]);

  if (!isLoading && location !== 'Not found') {
    return (
      <div className="mainBox">
        <LeftPanel data={currentWeather} />
        <RightPanel data={futureWeather} />
      </div>
    );
  }
  if (location === 'Not found') {
    return (<LocationNotFound />);
  }
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible
    />
  );
}

export default App;

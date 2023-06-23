import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { patchState } from '../store/weatherSlice/weatherSlice';

function LocationNotFound() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleLocationInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleLocationButtonClick = () => {
    dispatch(patchState({ city }));
  };

  return (
    <div>
      <div className="searchRow">
        <input type="text" id="cityInput" className="locationInput" placeholder="Pos input📍" onChange={handleLocationInputChange} />
        <button type="button" className="homeButton" onClick={handleLocationButtonClick}><span>🔍</span></button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '24px' }}>I dont know this place</div>
    </div>

  );
}

export default LocationNotFound;

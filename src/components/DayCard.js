import React from 'react';

import humidity from '../images/humidity.svg';
import wind from '../images/wind.svg';
import Parameter from './Parameter';

const parseDateToStr = (date) => {
  const event = new Date(date);
  return `${event.toLocaleDateString(['en-UK'], { weekday: 'short', month: 'long', day: 'numeric' })}`;
};

const temperatureWithSign = (temp) => ((Math.sign(temp) ? '+' : '-') + Math.abs(temp));

const averageHumidity = (minHum, maxHum) => Math.floor(((minHum + maxHum) / 2));

function DayCard({ data }) {
  return (
    <div className="dayCard">
      <div className="cardDayInfo">
        <img className="dayIcon" alt="123" src={`https://developer.foreca.com/static/images/symbols/${data.symbol}.png`} />
        <p className="currentDayInfoText">{parseDateToStr(data.date)}</p>
        <span className="currentDayInfoText">
          {temperatureWithSign(data.minTemp)}
          ...
          {temperatureWithSign(data.maxTemp)}
        </span>
        <div className="dayParametersRow">
          <Parameter data={{ name: 'Humidity', value: `${averageHumidity(data.minRelHumidity, data.maxRelHumidity)}%`, src: humidity }} />
          <Parameter data={{ name: 'Wind', value: `${Math.floor(data.maxWindSpeed)}m/s`, src: wind }} />
        </div>
      </div>
    </div>
  );
}

export default DayCard;

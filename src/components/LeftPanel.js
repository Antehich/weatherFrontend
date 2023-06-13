import React from 'react';
import Parameter from './Parameter';
import humidity from '../imgs/humidity.svg';
import wind from '../imgs/wind.svg';

const parseTimeToStr = (time) => {
    const event = new Date(time);
    return `${event.toLocaleTimeString(['en-UK'],{ hour: "2-digit", minute: "2-digit" })}`
}

const parseDateToStr = (date) => {
    const event = new Date(date);
    return `${event.toLocaleDateString(['en-UK'],{ weekday: 'short', month: 'long', day: 'numeric' })}`
}

function LeftPanel({callback, data}) {

    return (
        <div className="leftPanel">
            <div className="searchRow">
                <input type="text" id="city" className="locationInput" placeholder="Pos input📍"/>
                <button className="homeButton"><span>⬅</span></button>
            </div>
            <div className={"currentWeather"}>
                <img className={"currentWeatherIcon"} alt={"123"} src={`https://developer.foreca.com/static/images/symbols/${data.symbol}.png`}/>
                <p className={"currentTemperature"}>{data.temperature}°</p>
                <div className={"dayInfo"}>
                    <p className={"currentDate"}>{parseTimeToStr(data.time)}</p>
                    <p className={"currentTime"}>{parseDateToStr(data.time)}</p>
                </div>
                <div className={"currentParameters"}>
                    <div className={"parameterCol"}>
                        <Parameter data={{name: "Humidity", value: `${data.relHumidity}%`, src: humidity}}/>
                        <Parameter data={{name: "Wind", value: `${data.windSpeed}m/s`, src: wind}}/>
                    </div>
                    <div className={"parameterCol"}>
                        <Parameter data={{name: "Pressure", value: `${data.pressure}KPa`, src: wind}}/>
                        <Parameter data={{name: "UV index", value: `${data.uvIndex} units`, src: wind}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftPanel;
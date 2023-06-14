import React from 'react';
import Parameter from "./Parameter";
import humidity from "../imgs/humidity.svg";
import wind from "../imgs/wind.svg";

const parseDateToStr = (date) => {
    const event = new Date(date);
    return `${event.toLocaleDateString(['en-UK'],{ weekday: 'short', month: 'long', day: 'numeric' })}`
}

function DayCard({data}) {
    return (
        <div className={"dayCard"}>
            <div className={'cardDayInfo'}>
                <img className={'dayIcon'} alt={'123'} src={`https://developer.foreca.com/static/images/symbols/${data.symbol}.png`}></img>
                <p className={'currentDayInfoText'}>{parseDateToStr(data.date)}</p>
                <span className={'currentDayInfoText'}>{Math.sign(data.minTemp) ? '+':'-'}{Math.abs(data.minTemp)}...{Math.sign(data.maxTemp) ? '+':'-'}{Math.abs(data.maxTemp)}</span>
                <div className={'dayParametersRow'}>
                    <Parameter data={{name: "Humidity", value: `${Math.floor((data.minRelHumidity + data.maxRelHumidity)/2)}%`, src: humidity}}/>
                    <Parameter data={{name: "Wind", value: `${Math.floor(data.maxWindSpeed)}m/s`, src: wind}}/>
                </div>
            </div>
        </div>
    );
}

export default DayCard;
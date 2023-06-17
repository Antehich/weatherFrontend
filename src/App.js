import './App.css';
import React, {useEffect, useState} from 'react';
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import {BallTriangle} from "react-loader-spinner";
import {useDispatch, useSelector} from "react-redux";
import {citySetter} from "./reduxStaff/citySlice";
import {locationSetter} from "./reduxStaff/locationSlice";
import {currentWeatherSetter} from "./reduxStaff/currentWeatherSlice";
import {futureWeatherSetter} from "./reduxStaff/futureWeatherSlice";

function App() {
	const [loading, setLoading] = useState(true)

    const city = useSelector((state) => state.city.value)
    const cityDispatch = useDispatch()

	const location = useSelector((state) => state.location.value)
	const locationDispatch = useDispatch()

	const currentWeather = useSelector((state) => state.currentWeather.value)
	const currentWeatherDispatch = useDispatch()

	const futureWeather = useSelector((state) => state.futureWeather.value)
	const futureWeatherDispatch = useDispatch()



	useEffect(() => {
		setLoading(true)
		fetch(`http://5.101.47.233:5000/location`, {
			method: 'POST',
			body: JSON.stringify({'city': city}),
			headers: {'Content-Type': 'application/json'}
		}).then(response => response.json()).then(locations => locationDispatch(locationSetter(locations)))
	}, [city]);

	useEffect(() => {
		fetch(`http://5.101.47.233:5000/current`, {
			method: 'POST',
			body: JSON.stringify({'id': location.id}),
			headers: {'Content-Type': 'application/json'}
		}).then(response => response.json()).then(forecast => currentWeatherDispatch(currentWeatherSetter(forecast)))
	}, [location.id])

    useEffect(() => {
        fetch(`http://5.101.47.233:5000/future`, {
            method: 'POST',
            body: JSON.stringify({'id': location.id}),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json()).then(forecast => futureWeatherDispatch(futureWeatherSetter(forecast))).then(() => setLoading(false))
    }, [currentWeather, location.id])

	if (loading === false){
		return (
			<div className='mainBox'>
				<LeftPanel callback={cityDispatch(citySetter)} data={currentWeather}/>
				<RightPanel data={futureWeather}/>
			</div>);
	}
	else
		if (city === '' || location.id === 'Not found'){
			return(
				<div>
					<div className="searchRow">
						<input type="text" id="cityInput" className="locationInput" placeholder="Pos input📍"/>
						<button className="homeButton" onClick={() => {cityDispatch(citySetter((document.getElementById('cityInput').value)))}}><span>🔍</span></button>
					</div>
					<div style={{display: 'flex', justifyContent: 'center', fontSize: '24px'}}>I dont know this place</div>
				</div>

			);
	}
		else{
			return(<BallTriangle
				height={100}
				width={100}
				radius={5}
				color="#4fa94d"
				ariaLabel="ball-triangle-loading"
				wrapperClass={{}}
				wrapperStyle=""
				visible={true}
			/>)
		}
}

export default App;

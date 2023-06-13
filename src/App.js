import './App.css';
import React, {useEffect, useState} from 'react';
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import {BallTriangle} from "react-loader-spinner";

function App() {
	const [loading, setLoading] = useState(true)
	const [city, setCity] = useState('Tuapse')
	const [location, setLocation] = useState({})
	const [currentWeather, setCurrentWeather] = useState({})
    const [futureWeather, setFutureWeather] = useState([])


	useEffect(() => {
		fetch(`http://localhost:5000/location`, {
			method: 'POST',
			body: JSON.stringify({'city': city}),
			headers: {'Content-Type': 'application/json'}
		}).then(response => response.json()).then(locations => setLocation(locations))
	}, [city]);

	useEffect(() => {
		fetch(`http://localhost:5000/current`, {
			method: 'POST',
			body: JSON.stringify({'id': location.id}),
			headers: {'Content-Type': 'application/json'}
		}).then(response => response.json()).then(forecast => setCurrentWeather(forecast))
	}, [location])

    useEffect(() => {
        fetch(`http://localhost:5000/future`, {
            method: 'POST',
            body: JSON.stringify({'id': location.id}),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json()).then(forecast => setFutureWeather(forecast)).then(() => setLoading(false))
    }, [currentWeather])

	if (loading === false){
		return (
			<div className='mainBox'>
				<LeftPanel callback={setCity} data={currentWeather}/>
				<RightPanel data={currentWeather}/>
			</div>);
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

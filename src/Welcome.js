import React from 'react';
import './welcome.css'
import './images/sunset.svg'

const Welcome = () => {
	return (
		<div className="banner">
			<img className="weather-icon" src={ require('./images/sunset.svg') } />
			<h1 className="app-title">Weathrly</h1>
		</div>
	)
}



export default Welcome;
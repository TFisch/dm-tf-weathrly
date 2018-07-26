import React from 'react';
import './welcome.css'
import './images/logo.svg'

const Welcome = () => {
	return (
		<div className="banner">
			<img className="weather-icon" src={ require('./images/logo.svg') } />
			<h1 className="app-title">Weathrly</h1>
		</div>

	)
}



export default Welcome;
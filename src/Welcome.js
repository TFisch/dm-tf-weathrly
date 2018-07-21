import React from 'react';
import './welcome.css'
import './images/sunset.svg'

const Welcome = () => {
	return (
		<div class="banner">
			<img class="weather-icon" src={ require('./images/sunset.svg') } />
			<h1 class="app-title">Weathrly</h1>
		</div>
	)
}



export default Welcome;
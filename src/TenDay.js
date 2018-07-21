import React, { Component } from 'react'
import './TenDay.css'


export default class TenDay extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<li class="ten-day-wrapper">
				<div class="wrap-horiz">	
					<div class="day-wrap">
						<h1>{this.props.day.day}</h1>
						<span class="high-low">
							<h1>{this.props.day.high}</h1>
							<p class="divide">/</p>
							<h1>{this.props.day.low}</h1>
						</span>
					</div>
					<img class="weather-icon" src={ require('./images/sun-icon.svg') } />
				</div>		
			</li>
		)
	}
}
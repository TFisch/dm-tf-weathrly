import React, { Component } from 'react'

export default class TenDay extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<li>
				<h1>Day {this.props.day.day}</h1>
				<h1>High {this.props.day.high}</h1>
				<h1>Low {this.props.day.low}</h1>
			</li>
		)
	}
}
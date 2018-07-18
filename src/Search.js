import React, { Component } from 'react';


export default class Search extends Component {
	constructor() {
		super();
		this.state = {
			userLocationInput: props.enteredLocation
		}
	}

	render() {
		return(
			<div>	
				<input type="text"/>
				<button></button>
			</div>
		)
	}



}
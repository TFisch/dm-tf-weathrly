import React, { Component } from 'react';
import './Search.css'


export default class Search extends Component {
	constructor(props) {
		super();
		this.state = {
			userLocationInput: props.searchedLocation
	}
}

	render() {
		return(
			<div class="search-wrap">	
				<input class="location-input" type="text" value={this.state.userLocationInput} onChange={(event) => {
					this.setState( { userLocationInput: event.target.value } )
				}}/>
				<button class="submit" onClick= { (event) => { this.props.setLocation(this.state.userLocationInput); }}>submit</button>
			</div>
		)
	}

}
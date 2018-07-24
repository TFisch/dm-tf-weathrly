import React, { Component } from 'react';
import './Search.css'
const PrefixTrie = require('@timfischer/complete-me')


export default class Search extends Component {
	constructor(props) {
		super();
		this.state = {
			userLocationInput: props.searchedLocation
	}

	let cities = new PrefixTrie();
	cities.populate();

}

	render() {
		return(
			<div className="search-wrap">	
				<input className="location-input" type="text" value={this.state.userLocationInput} onChange={(event) => {
					this.setState( { userLocationInput: event.target.value } )
				}}/>
				<button className="submit" onClick= { (event) => { this.props.setLocation(this.state.userLocationInput); }}>submit</button>
			</div>
		) 
	}


}
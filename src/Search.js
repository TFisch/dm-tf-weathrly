import React, { Component } from 'react';
import './Search.css'
import cities from './cities.js'
const PrefixTrie = require('@timfischer/complete-me')


export default class Search extends Component {
	constructor(props) {
		super();
		this.state = {
			userLocationInput: props.searchedLocation,
			// trie: new PrefixTrie()
	}


	// this.state.trie.populate(cities);

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
import React, { Component } from 'react';
import './Search.css'
import cities from './cities.js'
import { PrefixTrie } from '@timfischer/complete-me';


export default class Search extends Component {
	constructor(props) {
		super();
		this.state = {
			userLocationInput: props.searchedLocation,
			prefixTrie: null
		}
		this.suggestions = []

}

	handleChange(e) {
		this.setState( { userLocationInput: e.target.value}, () => this.displaySuggestions())
		// this.displaySuggestions();
		console.log(this.state.userLocationInput) 
	}

	componentDidMount() {
		const prefixTrie = new PrefixTrie();
		prefixTrie.populate(cities.data);
		this.setState({
			prefixTrie
		})
	}

	displaySuggestions(){
		this.suggestions = this.state.prefixTrie.suggest(this.state.userLocationInput);
	}




	render() {
		return(
			<div className="search-wrap">	
				<input className="location-input" type="text" value={this.state.userLocationInput} onChange={(e) => this.handleChange(e)} />
				<div className="suggestList">
				<ul className="suggest">{this.suggestions.map(suggestion => <li>{suggestion}</li>)}</ul>
				</div>
				<button className="submit" onClick= {() =>	this.props.setLocation(this.state.userLocationInput)}>submit</button>
			</div>
		) 
	}

}
import React, { Component } from 'react';
import './Search.css'
import cities from './cities.js'
import { PrefixTrie } from '@timfischer/complete-me';


export default class Search extends Component {
	constructor(props) {
		super();
		this.state = {
			userLocationInput: '',
			prefixTrie: null,
			suggestions: []
		}

}

	handleChange(e) {
		this.setState({userLocationInput: e.target.value})
		this.displaySuggestions(e.target.value)
	}

	componentDidMount() {
		const prefixTrie = new PrefixTrie();
		prefixTrie.populate(cities.data);
		this.setState({
			prefixTrie
		})
	}

	displaySuggestions(userLetters){
		// this.suggestions = this.state.userLocationInput
		let suggestions = this.state.prefixTrie.suggest(userLetters).splice(0,4);
		this.setState({ suggestions: suggestions })
	}

	render() {
		return(
			<div className="search-wrap">	
				<input className="location-input" list="sugg" type="text" value={this.state.userLocationInput} onChange={(e) => this.handleChange(e)} />
				<div className="suggestList">
				<datalist className="suggest" id="sugg">{this.state.suggestions.map(suggestion => <option>{suggestion}</option>)}</datalist>
				</div>
		
				<button className="submit" onClick= {() =>	this.props.setLocation(this.state.userLocationInput)}>submit</button>
			</div>
		) 
	}

}
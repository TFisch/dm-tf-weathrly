import React, { Component } from 'react';

export default class Search extends Component {
	constructor(props) {
		super();
		this.state = {
			userLocationInput: props.searchedLocation
		}
	}

	render() {
	return(
		<div>	
			<input type="text" value={this.state.userLocationInput} onChange={(event) => {
				this.setState( { userLocationInput: event.target.value } )
			}}/>
			<button onClick= { (event) => { this.props.setLocation(this.state.value); }}>submit</button>

        {/* // <button onClick= { (event) => {this.props.filterQuestions(this.state); }}>Filter Questions</button> */}
		</div>
	)
	}



}
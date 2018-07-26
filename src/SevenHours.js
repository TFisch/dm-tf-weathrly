import React, { Component } from 'react';
import './SevenHours.css'



export default class SevenHours extends Component {
  constructor(props) {
    super();

  }

  render() {
    return (
     <div className="seven-day-wrapper">
        <li className="seven-day-display">
          <h3 className="hour-text">{this.props.hour.time}</h3>
          <h1 className="proj-temp-text">{this.props.hour.temp}</h1>
        </li>
          <img className="weather-icon-seven" src={require(`./images/${this.props.hour.icon}.svg`)}/>
    </div>
    )
  }
}


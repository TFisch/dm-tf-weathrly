import React, { Component } from 'react';
import './SevenHours.css'



export default class SevenHours extends Component {
  constructor() {
    super();

  }

  render() {
    return (
     <div className="seven-day-wrapper">
        <li class="seven-day-display">
          <h3 class="hour-text">{this.props.hour.time}</h3>
          <h1 class="proj-temp-text">{this.props.hour.temp}</h1>
        </li>
        <img className="weather-icon-seven" src={ require('./images/sun-icon.svg') } />
    </div>
    )
  }
}


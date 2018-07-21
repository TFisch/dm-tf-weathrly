import React, { Component } from 'react';
import './SevenHours.css'



export default class SevenHours extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <li class="seven-day-display">
        <h3 class="hour-text">"Hour"{this.props.hour.time}</h3>
        <h1 class="proj-temp-text">"Temp"{this.props.hour.temp}</h1>
      </li>
    )
  }
}


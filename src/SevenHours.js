import React, { Component } from 'react'


export default class SevenHours extends Component {
  constructor() {
    super();

  }

  render(){
    return (
      <li class="seven-day-display">
        <h1 class="hour">"Hour"{this.props.hour.time}</h1>
        <h1 class="proj-temp">"Temp"{this.props.hour.temp}</h1>
      </li>
    )
  }
}


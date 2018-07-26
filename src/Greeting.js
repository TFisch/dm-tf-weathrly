import React from 'react';
import './Greeting.css';

const Greeting = () => {
  return(
    <div className="greeting">
      <div className="greeting-wrapper">
        <h1 className="welcome-text">Welcome to Weathrly!</h1>
        <h2 className="enter-text">Enter A City or Zip Code to Check the Local Weather</h2>
      </div>
    </div>
  )
}

export default Greeting;
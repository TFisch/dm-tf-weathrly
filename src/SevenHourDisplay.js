import React from 'react';
import SevenHours from './SevenHours.js'
import './SevenHourDisplay.css'


export default function SevenHourDisplay (props) {
  return(
		
    <ul className="sevenHourCard">
      {
        props.sevenHourCast.map((hour, index) => {
          console.log(hour)
          return <SevenHours hour={hour} key={index} />
        })

      }

    </ul>

	)

}
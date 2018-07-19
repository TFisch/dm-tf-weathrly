import React from 'react';
import SevenHours from './SevenHours.js'


export default function SevenHourDisplay (props) {
  return(
		<ul>
      {
        props.sevenHourCast.map((hour, index) => {
          return <SevenHours hour={hour} key={index} />
        })

      }

    </ul>
	)

}

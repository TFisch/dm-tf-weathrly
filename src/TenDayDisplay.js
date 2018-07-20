import React from 'react';
import TenDay from './TenDay.js'

export default function TenDayDisplay (props) {
return(
	<ul className="tenDayCard">
		{
			props.tenDayCast.map((day, index) => {
				return <TenDay day={day} key={index} />
			})
		}
	</ul>
  )
}
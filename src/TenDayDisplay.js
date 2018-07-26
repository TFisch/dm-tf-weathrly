import React from 'react';
import TenDay from './TenDay.js';
import './TenDayDisplay.css';


export default function TenDayDisplay (props) {
	// console.log(props)
	return(
		<ul className="tenDayCard">
			{
				props.tenDayCast.map((day, index) => {
					return <TenDay day={day} key={index} />;
				})
			}
		</ul>
	);
}
import React from 'react'
import SevenHours from './SevenHours.js';
import TenDay from './TenDay.js'
import './Card.css'


export default function Card (props) {
return ( 
  <div className="cardDisplay">
    <ul className="sevenHourCard">
			{
				props.sevenHourCast.map((hour, index) => {
					return <SevenHours hour={hour} key={index} />;
				})
			}
		</ul>
    <ul className="tenDayCard">
			{
				props.tenDayCast.map((day, index) => {
					return <TenDay day={day} key={index} />;
				})
			}
		</ul>
  </div>
  )
}
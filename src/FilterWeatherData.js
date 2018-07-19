function filterWeather (data) {
	const currentWeather = {
		 currCity: data.current_observation.display_location.full,
		 currDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
		 currTemp: data.current_observation.temp_f,
		 high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
		 low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
		 summary: data.forecast.txt_forecast.forecastday[0].fcttext
	}

	const sevenHoursRaw = data.hourly_forecast.splice(0, 7);


	const sevenHours = sevenHoursRaw.reduce((sevenHours, hour) => {
	let hourObj = {time: hour.FCTTIME.hour,
								temp: hour.temp.english
	}
	sevenHours.push(hourObj)
	return sevenHours
	}, [])

	console.log(sevenHours);


	return {currentWeather, sevenHours}
}

export default filterWeather;
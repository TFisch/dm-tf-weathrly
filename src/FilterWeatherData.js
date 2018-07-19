function filterWeather (data) {
	const currentWeather = {
		 currCity: data.current_observation.display_location.full,
		 currDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
		 currTemp: data.current_observation.temp_f,
		 high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
		 low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
		 summary: data.forecast.txt_forecast.forecastday[0].fcttext
	}
	console.log(data)
	console.log(currentWeather)
	return currentWeather
}

export default filterWeather;
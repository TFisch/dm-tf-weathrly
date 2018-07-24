function filterWeather (data) {
	const currentWeather = {
		 currCity: data.current_observation.display_location.full,
		 currDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
		 currTemp: Math.floor(data.current_observation.temp_f),
		 high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
		 low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
		 summary: data.forecast.txt_forecast.forecastday[0].fcttext,
		 image: data.current_observation.icon_url

	}

	const sevenHoursRaw = data.hourly_forecast.splice(0, 7);

	const sevenHours = sevenHoursRaw.reduce((sevenHours, hour) => {

		let hourObj = {time: hour.FCTTIME.civil,
								temp: Math.floor(hour.temp.english),
								icon: hour.icon_url
	}
	sevenHours.push(hourObj)
	return sevenHours
	}, [])

	const tenDayArray = data.forecast.simpleforecast.forecastday.splice(0, 10)

	const tenDaysRaw = tenDayArray.reduce((tenDay, day) => {
		let dayObj = {
			day: day.date.weekday,
			high: day.high.fahrenheit,
			low: day.low.fahrenheit,
			icon: day.icon_url
		}
		tenDay.push(dayObj)
		return tenDay
	}, [])

	return {currentWeather, sevenHours, tenDaysRaw}
}

export default filterWeather;
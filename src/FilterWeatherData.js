function filterWeather (data) {
	const currentWeather = {
		 currCity: data.current_observation.display_location.full,
		// currday: 
		// currTemp:
		// highAndLow: 
		// summary:
	}
	console.log(data)
	return currentWeather
}

export default filterWeather;
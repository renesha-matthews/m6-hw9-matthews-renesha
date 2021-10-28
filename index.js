var formEl = document.querySelector('form')
var inputEl = document.querySelector('input')
var weatherEl = document.getElementById('weather')


formEl.onsubmit = function(e) {
    e.preventDefault()

    var query = inputEl.value

    fetch('https://api.openweathermap.org/data/2.5/weather?appid=3af40a75938c30c0cc046280656f91a1&units=imperial&q=' + query)
        .then(function(response) {
            return response.json()
        })

        .then(function(result) {
            console.log(result)
            weatherInfo(result)
            inputEl.value = " "
        })

        .catch(function(err) {
            console.log(err)
        })
}

function weatherInfo(weatherObj) {
    weatherEl.innerHTML = " "

    // city name
    var city = document.createElement('h2')
    city.textContent = weatherObj.name + ", " + weatherObj.sys.country
    city.style = "font-size: 50px; color: rgb(251, 248, 248);"
    weatherEl.appendChild(city)

    // icon image for current weather conditions
    var icon = document.createElement('img')
    icon.src = weatherObj.weather[0].icon
    weatherEl.appendChild(icon)

    // description of current weather
    var currentWeather = document.createElement('p')
    currentWeather.textContent = weatherObj.weather[0].description 
    currentWeather.style = "font-size: 30px; color: rgb(251, 248, 248); text-transform: capitalize;"
    weatherEl.appendChild(currentWeather)

    // current temperature
    var currentTemp = document.createElement('p')
    currentTemp.textContent = "Current: " + weatherObj.main.temp
    currentTemp.style = "font-size: 30px; color: rgb(251, 248, 248);"
    weatherEl.appendChild(currentTemp)

    // current "feels like" temperature
    var feelsLike = document.createElement('p')
    feelsLike.textContent = "Feels like: " + weatherObj.main.feels_like
    feelsLike.style = "font-size: 30px; color: rgb(251, 248, 248);"
    weatherEl.appendChild(feelsLike)

    // last updated
    var timeUpdate = document.createElement('p')
    timeUpdate.textContent = "Last updated: " + weatherObj.dt
    timeUpdate.style = "font-size: 30px; color: rgb(251, 248, 248);"
    weatherEl.appendChild(timeUpdate)
}
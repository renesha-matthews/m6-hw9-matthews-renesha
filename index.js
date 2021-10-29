var formEl = document.querySelector('form')
var inputEl = document.querySelector('input')
var weatherEl = document.getElementById('weather')


formEl.onsubmit = function(e) {
    e.preventDefault()

    var query = inputEl.value

    if(!query) return

    fetch('https://api.openweathermap.org/data/2.5/weather?appid=3af40a75938c30c0cc046280656f91a1&units=imperial&q=' + query)
        .then(function(response) {
            return response.json()
        })

        .then(function(result) {
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
    city.style = "font-size: 35px; color: rgb(251, 248, 248);"
    weatherEl.appendChild(city)

    // icon image for current weather conditions
    var icon = document.createElement('img')
    icon.src = "http://openweathermap.org/img/wn/" + weatherObj.weather[0].icon + "@2x.png"
    icon.alt = "An icon of the current weather condition"
    weatherEl.appendChild(icon)

    // description of current weather
    var currentWeather = document.createElement('p')
    currentWeather.textContent = weatherObj.weather[0].description 
    currentWeather.style = "font-size: 30px; color: rgb(251, 248, 248); text-transform: capitalize; padding-bottom: 20px;"
    weatherEl.appendChild(currentWeather)

    // current temperature in degrees fahrenheit
    var currentTemp = document.createElement('p')
    currentTemp.textContent = "Current: " + weatherObj.main.temp + '\u00B0 F'
    currentTemp.style = "font-size: 30px; color: rgb(251, 248, 248);"
    weatherEl.appendChild(currentTemp)

    // current "feels like" temperature in degrees fahrenheit
    var feelsLike = document.createElement('p')
    feelsLike.textContent = "Feels like: " + weatherObj.main.feels_like + '\u00B0 F'
    feelsLike.style = "font-size: 30px; color: rgb(251, 248, 248); padding-bottom: 20px;"
    weatherEl.appendChild(feelsLike)

    // last updated
    var timeUpdate = document.createElement('p')
    var timeStamp = new Date(weatherObj.dt * 1000)
    timeUpdate.textContent = "Last updated: " + timeStamp.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'})
    timeUpdate.style = "font-size: 25px; color: rgb(251, 248, 248); padding-bottom: 20px;"
    weatherEl.appendChild(timeUpdate)
}
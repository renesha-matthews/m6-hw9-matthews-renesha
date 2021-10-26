var locationEl = document.getElementById('location')
var weatherEl = document.getElementById('weather')
var searchBtn = document.querySelector('button')

searchBtn.onclick = function() {
    fetch("api.openweathermap.org/data/2.5/weather?q=atlanta&appid=3af40a75938c30c0cc046280656f91a1")
        .then(function(res) {
            return res.json()
        })
        .then(function(res) {
            console.log(res)
        })
}
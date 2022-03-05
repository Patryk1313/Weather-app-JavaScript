let weatherDate = document.querySelector('.date p')
let weatherLocation = document.querySelector('.weather-info--location p')
let weatherTemp = document.querySelector('.weather-info--temperature h1')
let weatherIcon = document.querySelector('.weather-icon')
let weatherDes = document.querySelector('.weather-info--description p')
let weatherTempFell = document.querySelector('.temp-fell')
let weatherWind = document.querySelector('.wind')
let weatherPressure =  document.querySelector('.pressure')

const city = document.querySelector('#searchCity')
const btn = document.querySelector('#search')

// REFRESH TIME
function refDate (){
    let accualDate = new Date().toLocaleTimeString();
    weatherDate.textContent = accualDate
}

setInterval(() => {
    refDate();
}, 1000);

// API
btn.addEventListener('click', () => {
    if(city.value == "" || city.value == Number) {return}
    searchCity()
})

function searchCity() {
    const APIKey = '8d4e7766d7e7bc6d818d57d0f2ba1015'
    const API = `https://api.openweathermap.org/data/2.5/find?q=${city.value}%20&appid=${APIKey}`


    fetch(API)
    .then(response => response.json())
    .then(data => {
        weatherIcon.innerHTML = `<img src="/img/${data.list[0].weather[0].icon}.png" alt="">`

        weatherLocation.textContent = data.list[0].name + ', ' 
        + data.list[0].sys.country

        weatherTemp.textContent = (Math.floor(Math.ceil(data.list[0].main.temp -  273))) + "°"

        weatherDes.textContent = data.list[0].weather[0].main

        weatherTempFell.textContent = (Math.floor(Math.ceil(data.list[0].main.feels_like -  273))) + "°"

        weatherWind.textContent = data.list[0].wind.speed + " m/s"

        weatherPressure.textContent = data.list[0].main.pressure + " hPa"
    })
}
searchCity()
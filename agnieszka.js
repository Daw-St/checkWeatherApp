const button = document.getElementById('btn');
let city = document.getElementById('in');
const key = "9894de7132c0e6b5094154a34fb8b43a";
let body = document.getElementsByTagName('body');
let container = document.getElementById("con");
let cityCountry = document.getElementById("city-country");
let weatherIcon = document.getElementById('weather-icon');
let temp = document.getElementById("temp");
let weatherDesc = document.getElementById("weather-desc");
let maxTemp = document.getElementById("max-temp");
let minTemp = document.getElementById("min-temp");
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let cloudiness = document.getElementById("cloudiness");
// var skycons = new Skycons({ "color": rgb(70, 70, 70)});
const form = document.getElementById('form')
form.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault()
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=${key}`)
        .then(resp => {
            resp.json()
            .then(data => {
               var weatherData = data;
                console.log(weatherData);
                changeWeather(weatherData);
            })
            // .catch(error => {
            //     cityCountry.innerText = `${weatherData.message}`;
            // })
    })
    
}
function kelwinToCelcius(temperature){
    return (temperature - 273.15).toFixed(0);
}
function Unix_timestamp(t) {
    var dt = new Date(t * 1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    return hr + ':' + m.substr(-2);
}
function changeWeather(weatherData) {
    if (weatherData.cod == '404' || weatherData.cod == '400'){
        // var error = document.getElementById(error);
        // error.style.visibility = "visible";
        // error.innerText = `${weatherData.message}`;
        alert(`${weatherData.message}`);
    }
    if (weatherData.cod == '200'){
        container.style.visibility = "visible";
        cityCountry.innerText = `${weatherData.name}, ${weatherData.sys.country}`;
        temp.innerText = `${kelwinToCelcius(weatherData.main.temp)}°`;
        weatherDesc.innerText = `${weatherData.weather[0].main}`;
        if (weatherData.weather[0].main=='Rain'){
            // body[0].style.background = "linear-gradient(-45deg, rgb(255, 180, 157), rgb(255, 206, 132), rgb(126, 221, 255), rgb(142, 253, 227))";
            weatherIcon.innerHTML = '<i class="icon-rain" style="font-size: 120px; text-align: center;"></i>';
        }
        if (weatherData.weather[0].main == 'Clouds') {
            weatherIcon.innerHTML = '<i class="icon-clouds" style="font-size: 120px; text-align: center;"></i>';
        }
        if (weatherData.weather[0].main == 'Clear') {
            weatherIcon.innerHTML = '<i class="icon-cloud-sun" style="font-size: 120px; text-align: center;"></i>';
        }
        if (weatherData.weather[0].main == "Snow") {
            weatherIcon.innerHTML = '<i class="icon-snow-alt" style="font-size: 120px; text-align: center;"></i>';
        }
        if (weatherData.weather[0].main == "Drizzle") {
            weatherIcon.innerHTML = '<i class="icon-drizzle" style="font-size: 120px; text-align: center;"></i>';
        }
        if (weatherData.weather[0].main == "Thunderstorm ") {
            weatherIcon.innerHTML = '<i class="icon-cloud-flash" style="font-size: 120px; text-align: center;"></i>';
        }
        maxTemp.innerText = `Max temp: ${kelwinToCelcius(weatherData.main.temp_max)}°`;
        minTemp.innerText = `Min temp: ${kelwinToCelcius(weatherData.main.temp_min)}°`;
        sunrise.innerText = `Sunrise: ${Unix_timestamp(weatherData.sys.sunrise)}`;
        sunset.innerText = `Sunset: ${Unix_timestamp(weatherData.sys.sunset)}`;
        wind.innerText = `Wind: \n ${weatherData.wind.speed} m/s`;
        humidity.innerText = `Humidity: \n ${weatherData.main.humidity}%`;
        pressure.innerText = `Pressure: \n ${weatherData.main.pressure} hPa`;
        cloudiness.innerText = `Cloudiness: \n ${weatherData.clouds.all}%`;
    }
}
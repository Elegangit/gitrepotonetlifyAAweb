let root = "https://api.openweathermap.org";
var apiKey = "f3f6c6ae89dc4fb96cdc25f189e3c106";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let now = new Date();

let h3 = document.querySelector("h3");
document.querySelector("#date");
let currentTime = new Date();

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];

h3.innerHTML = `${day} , ${month} ${date} ${year} , ${hours}:${minutes} `;

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = date.getDay();

  return days[day];
}
function formatDate(timestamp) {
  let date = new Date(timestamp * 1000);
  let hours = date.getHours();

  return hours;
}
function formatSunriseTime(date) {
  let sunrisehour = date.getsunrisehour();
  if (sunrisehour < 10) {
    sunrisehour = `0${sunrisehour}`;
  }
  let sunriseminutes = date.getsunriseminutes();
  if (sunriseminutes < 10) {
    sunriseminutes = `0${sunriseminutes}`;
  }
  return `${sunrisehour}:${sunriseminutes}`;
}

function formatSunsetTime(date) {
  let sunsethour = date.getsunsethour();
  if (sunsethour < 10) {
    sunsethour = `0${sunsethour}`;
  }
  let sunsetminutes = date.getsunsetminutes();
  if (sunsetminutes < 10) {
    sunsetminutes = `0${sunsetminutes}`;
  }
  return `${sunsethour}:${sunsetminutes}`;
}

console.log("#sunrise");
console.log("#sunset");

function searchCity(city) {
  let apiKey = "f3f6c6ae89dc4fb96cdc25f189e3c106";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
  document.querySelector("displayweathercondition");
  document.querySelector("weather-forecast-date");
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function searchLocation(position) {
  let apiKey = "f3f6c6ae89dc4fb96cdc25f189e3c106";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function displayWeatherCondition(response) {
  event.preventDefault();
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#fahrenheit-link").innerHTML =
    Math.round(response.data.main.temp * 9) / 5 + 32;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

  getForecast(response.data.coord);
}

function CurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", CurrentLocation);

function celsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#");
  temperatureElement.innerHTML = get.celsiusTemperature;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  celsiusTemperature = response.data.main.temp;
  document.querySelector(".highLow").innerHTML = `${Math.round(
    response.data.main.temp_min
  )}ºC/${Math.round(response.data.main.temp_max)}ºC`;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

function FahrenheitTemperature(event) {
  event.preventDefault();
  let apiKey = "f3f6c6ae89dc4fb96cdc25f189e3c106";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayFahrenheitTemperature);
}
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

function getForecast(coordinates) {
  let apiKey = "f3f6c6ae89dc4fb96cdc25f189e3c106";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayForecast);
  // console.log(apiUrl);
  // console.log(coordinates.lat);
  // console.log(coordinates.lon);
  // console.log(getForecast.data.daily);
  // console.log(getForecast());
  // document.querySelector("forecast");
  // displayForecast.addEventListener("click", searchForm);
}

function getWeather(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  apiKey = "f3f6c6ae89dc4fb96cdc25f189e3c106";
  apiUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`;
}

function displayForecast(response, index) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  document.querySelector("weather-forecast-date");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index > 0 && index < 8) {
      forecastHTML =
        forecastHTML +
        `<div class="col">        
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
              <img src="http://openweathermap.org/img/wn/${
                forecastDay.weather[0].icon
              }@2x.png" alt=""/>
              <div class="forecast-temperature">
                <span id="day-high">${Math.round(forecastDay.temp.max)}</span>°
                <span class="low" id="day-low">${Math.round(
                  forecastDay.temp.min
                )}</span>°
              </div>
            </div>
    `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function showCurrentForecast(response) {
  let icon = document.querySelector(newFunction());
  let temperature = Math.round(response.data.main.temp);
  let sunriseUTC = new Date(response.data.sys.sunrise * 1000);
  let sunsetUTC = new Date(response.data.sys.sunset * 1000);
  let location = document.querySelector("h1");
  let currentTemp = document.querySelector("#current-temperature");
  let sunrise = document.querySelector("#sunrise");
  let sunset = document.querySelector("#sunset");
  celsiusTemperature = response.data.main.temp;
  location.innerHTML = `${city}`;
  currentTemp.innerHTML = `${temperature}° C`;
  sunrise.innerHTML = get.sunrise(sunriseUTC);
  sunset.innerHTML = get.sunset(sunsetUTC);
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", `${response.data.weather[0].description}`);
  getForecast(response.data.coord);
  getForecast(date.getDay());
}
function newFunction() {
  return "#current-weather-icon";
}
function showFarenheit(event) {
  event.preventDefault();
  newFunction();
  let forecastHigh = document.querySelectorAll("#day-high");
  forecastHigh.forEach(function (item) {
    let currentHigh = item.innerHTML;
    item.innerHTML = Math.round((currentHigh * 9) / 5 + 32);
  });
  let forecastLow = document.querySelectorAll("#day-low");
  forecastLow.forEach(function (item) {
    let currentLow = item.innerHTML;
    item.innerHTML = Math.round((currentLow * 9) / 5 + 32);
  });
}
// function newFunction() {
//   currentTemperature.innerHTML = `${farenheitTemperature}° F`;
// }

searchCity("");

export default class Api {
  root = "https://api.openweathermap.org";
  apiKey = "f3f6c6ae89dc4fb96cdc25f189e3c106";
}

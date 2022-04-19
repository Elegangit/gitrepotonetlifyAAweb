function formatDate(date) {
  let now = new Date();

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];
  return `${day} ${date} , ${hours}:${minutes}`;
}

let root = "https://api.openweathermap.org";
var apiKey = "f3f6c6ae89dc4fb96cdc25f189e3c106";

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "f3f6c6ae89dc4fb96cdc25f189e3c106";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  event.preventDefault();
  let apiKey = "f3f6c6ae89dc4fb96cdc25f189e3c106";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function CurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let form = document.querySelector("form");
searchCity("");
event.preventDefault();
form.addEventListener("submit", handleSubmit);

function celsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#");
  temperatureElement.innerHTML = get.celsiusTemperature;
}

function convertCelsius(event) {
  event.preventDefault();
  let celsiusConversion = celsiusTemperature;
  document.querySelector("#temperature-degree").innerHTML = Math.round(
    celsiusConversion
  );
}

function fahrenheitTemperature(event) {
  event.preventDefault();
  let apiKey = "f3f6c6ae89dc4fb96cdc25f189e3c106";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let temperatureElement = document.querySelector("#");
  temperatureElement.innerHTML = get.fahrenheitTemperature;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", CurrentLocation);

document.querySelector("#fahrenheit");
document
  .querySelector("#celsius")
  .addEventListener("click", convertcelsiusTemperature);

searchCity("Paris");

function displaytemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round("#temperature");
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  fahrenheitTemperature = response.data.main.temp;
  console.log(response);
  temperatureElement.innerHTML = Math.round("#temperature");

  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let fontapitoken = "D6D5FB4E-CABA-4B6F-93B3-A973F0105FB4";

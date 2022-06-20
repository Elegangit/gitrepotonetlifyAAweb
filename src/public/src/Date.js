let now = new Date();

let h3 = document.querySelector("h3");

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

h3.innerHTML = `${day} , ${month} ${date}, ${year}  ${hours}:${minutes}`;

function formatDate(date) {
  let now = new Day();
  day = days[now.getDay()];
  hours = date.getHours();
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function forecastDay(days) {
  var weekdays = new Array(7); //start from today
  day = days[now.getDay()];
  weekdays[0] = "Sun";
  weekdays[1] = "Mon";
  weekdays[2] = "Tues";
  weekdays[3] = "Wed";
  weekdays[4] = "Thurs";
  weekdays[5] = "Fri";
  weekdays[6] = "Sat";
  console.log(weekdays);
  console.log(getDays());
}
function getdays() {
  const arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let startofweekdays = [0];
  let endofweekdays = [6];
  forecastDay = new forecastDay(data.list[0].dt * 1000);
  const dayName = days[d.getDay()];
  console.log(dayName);
  days = getdays(); // [0, 1, 2, 3, 4, 5, 6];
  for (let i = 0; i <= 6; i++) {
    arr.push((arr + i) % 7);
  }
  return arr;
}

import React from "react";
import "./styles.css";
import APi from "./App.js";

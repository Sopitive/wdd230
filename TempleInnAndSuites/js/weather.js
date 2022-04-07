const wind = document.querySelector(".wind-speed");
const temperature = document.querySelector(".temperature");
const wind_chill = document.querySelector(".wind-chill");
const main = document.querySelector(".main");
const weatherIcon = document.querySelector("#weathericon");
const dayTemp = document.querySelectorAll(".day-temp");
const dayName = document.querySelectorAll(".day-name");
const today = new Date();
const day = today.getDay();
const alert = document.querySelector(".alert");
const alertClose = document.querySelector(".alert-close");
let lat = 35.048689;
let lon = -106.896172;


alertClose.addEventListener("click", hideAlert);

function hideAlert() {
    alert.style.display = "none";
    alertClose.style.display = "none";
    return;
}


function getAlerts() {

    let alert_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}`;
    fetch(alert_url)
        .then(convertToJson)
        .then(doAlerts)
        .catch(err => {
            alert.textContent = "No Alerts";
        });
}

function doAlerts(data) {
    let alerts = data.alerts;
    if (alerts.length > 0) {
        alert.textContent = alerts[0].description;
    } else {
        alert.textContent = "No Alerts";
    }
}


const API_key = "c214e3f900b57a2339e013f6fe75b871";
let results = null;

function getWeather() {

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`;
    fetch(url)
        .then(convertToJson)
        .then(doStuff)
        .catch(err => console.log(err));
}

function convertToJson(response) {
    if (response.ok) {
        return response.json();
    } else {
        return console.log("Error: " + JSON.stringify(response))
    }
}

let temp = "";
let main_state = "";
let wind_speed = "";
let humidity = document.querySelector(".humidity");


function doStuff(data) {
    results = data;
    icon = results['weather'][0]['icon'];
    main_state = results['weather'][0]['main'];
    temp = results['main']['temp'];
    wind_speed = results['wind']['speed'];
    humidity_result = results['main']['humidity'];

    wind.innerHTML = wind_speed;
    temperature.innerHTML = temp + "°F";
    main.innerHTML = main_state;
    if (wind_speed > 5 && temp < 50) {
        wind_chill.innerHTML = (35.74 + (0.6215 * temp) - (35.75 * (wind_speed ** 0.16)) + (0.4275 * (temp * (wind_speed ** 0.16)))).toFixed(2) + "°F";
    } else {
        wind_chill.innerHTML = "N/A";
    }
    humidity.innerHTML = humidity_result + "%";
    weatherIcon.src = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.alt = main_state;
}

function getForecast() {
    const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`;
    fetch(url2).then(convertToJson).then(doStuff2);
}

let results2 = null;

function doStuff2(data) {
    results2 = data;
    for (let i = 0; i < dayTemp.length; i++) {
        dayTemp[i].innerHTML = results2['list'][i + 8]['main']['temp'] + "°F";
        dayName[i].innerHTML = getDayName(i + 1);
    }
}

function getDayName(day) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
}

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`;
const weatherData = fetch(url).then(convertToJson).then(doStuff);

getAlerts();
getWeather();
getForecast();
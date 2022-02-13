const wind = document.querySelector(".wind-speed").innerHTML;
const temperature = document.querySelector(".temperature").innerHTML;
const wind_chill = document.querySelector(".wind-chill");
console.log(temperature);
console.log(wind);

wind_chill.innerHTML = (35.74 + (0.6215 * temperature) - (35.75 * (wind**0.16)) + (0.4275 * (temperature * (wind**0.16)))).toFixed(2);
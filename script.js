let cityName = document.getElementById("cityName");
let cityDetails = document.getElementById("cityDetails");
let temperature = document.getElementById("temperature");
let tempImage = document.getElementById("tempImage");
let date_time = document.getElementById("date_time");
let x = new Date();

let fetchDetails = async () => {
  if (cityName.value.length == 0) {
    alert("please enter a city name before searching");
  } else {
    // API fetch
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    cityDetails.innerHTML = `📍${data.name},${data.sys.country}`;
    temperature.innerHTML = `🌡️${data.main.temp}<sup>o</sup>C `;

    date_time.innerHTML = `📅${x.toDateString()}`;

    if (data.main.temp > 30) {
      tempImage.src =
        "https://icon-icons.com/icon/sunny-hot-weather-sun-summer/251709";
    } else if (data.main.temp >= 20 && data.main.temp < 30) {
      tempImage.src =
        "https://icon-icons.com/icon/raining-clouds-rain-cloudy-rainy-weather/194235";
    } else if (data.main.temp > 20 && data.main.temp > 5) {
      tempImage.src = "https://icon-icons.com/icon/snow-cloud-weather/2232";
    } else if (data.main.temp < 0) {
      tempImage.src =
        "https://cdn.icon-icons.com/icons2/1728/PNG/512/4003975-christmas-cold-emoji-freezing-santa_113003.png";
    }
  }
};

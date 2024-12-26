const apikey = "521fc112c606c9244dade4f42ad1317e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}&units=metric`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "image/cloud.png";
            break;
        case "Haze":
            weatherIcon.src = "image/haze.png";
            break;
        case "Rain":
            weatherIcon.src = "image/rain.png";
            break;
        case "Snow":
            weatherIcon.src = "image/snow.png";
            break;
        case "Clear":
            weatherIcon.src = "image/sun.png";
            break;
        case "Mist":
            weatherIcon.src = "image/mist.png";
            break;
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

const apikey="cd843a3e6de793a63e14dc809d7f35bd"
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchHBox = document.querySelector(".search input")
const searchHBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function chackWeather (city){
    const responce = await fetch(apiurl + city + `&appid=${apikey}`)

if(responce)

    var data = await responce.json()
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main  == "Clouds") {
        weatherIcon.src="clouds.png.gif"
    }
    else if (data.weather[0].main  == "Rain") {
        weatherIcon.src="rain.png.gif"
    }
    else if (data.weather[0].main  == "Drizzle") {
        weatherIcon.src="drizzle.png.gif"
    }
    else if (data.weather[0].main  == "Clear") {
        weatherIcon.src="clear.png.gif"
    }
    else if (data.weather[0].main  == "Mist") {
        weatherIcon.src="mist.png.gif"
    }
    document.querySelector(".weather").style.display  = "block"
}

searchHBtn.addEventListener("click", () =>{
    chackWeather(searchHBox.value)
})
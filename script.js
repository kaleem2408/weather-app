const apiKey = "45bc624bef018aa36f7598c22707a572";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        
        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";

            }else{
            var data = await response.json();

          

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src="images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src="images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src="images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src="images/mist.png";
            }
            else if(data.weather[0].main == "Snow"){
                weatherIcon.src="images/snow.png";
            }

            document.querySelector(".weather").style.display = "block"
            document.querySelector(".error").style.display = "none";

    }
}



        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })







































 /*
 // API key for accessing OpenWeatherMap API
const apiKey = "45bc624bef018aa36f7598c22707a572";

// API endpoint for retrieving weather data in metric units
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Reference to the HTML element with the class "search" and an input element inside it
const searchBox = document.querySelector(".search input");

// Reference to the HTML button element inside the element with the class "search"
const searchBtn = document.querySelector(".search button");

// Reference to the HTML element with the class "weather-icon"
const weatherIcon = document.querySelector(".weather-icon");

// Async function to check and display weather information for a given city
async function checkWeather(city) {
    // Fetch weather data for the specified city from the OpenWeatherMap API
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Check if the response status is 404 (City not found)
    if (response.status == 404) {
        // Display error message and hide weather information
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        // Parse the JSON data from the response
        var data = await response.json();

        // Display weather information in the respective HTML elements
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        // Set the weather icon based on the main weather condition
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        // Display weather information and hide the error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Event listener for the button click to trigger the checkWeather function with the input value
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
}); 
*/
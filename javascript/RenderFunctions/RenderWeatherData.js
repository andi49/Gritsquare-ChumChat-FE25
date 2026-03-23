import { getDataFromCity, getWeatherData } from "../function/api.js";

export const RenderWeatherData = async () => {
    const weatherContainer = document.querySelector("#sidenav");

    if (!weatherContainer) {
        console.error("Weather container not found!");
        return;
    }

    try {
        const cityData = await getDataFromCity();
        const weatherData = await getWeatherData(cityData[0].lon, cityData[0].lat);

        console.log("City data:", cityData);
        console.log("Weather data:", weatherData);

        // Render weather data
        weatherContainer.innerHTML = `
            <div class="weather-info">
                <h3>Väder i Malmö</h3>
                <p>Temperatur: ${weatherData.main.temp}°C</p>
                <p>Väder: ${weatherData.weather[0].description}</p>
                <p>Luftfuktighet: ${weatherData.main.humidity}%</p>
            </div>
        `;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherContainer.innerHTML = "<p>Kunde inte hämta väderdata</p>";
    }
}
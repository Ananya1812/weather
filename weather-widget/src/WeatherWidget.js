import React, { useState } from "react";
import axios from "axios";
import "./WeatherWidget.css"; // Import CSS

const API_KEY = "f15d38a9da0100da16eaa58dbf9563e0"; // Replace with your API key

const WeatherWidget = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!location) return;
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (err) {
      setError("Location not found.");
      setWeather(null);
    }
  };

  return (
    <div className="widget-container">
      <h2>Weather Widget</h2>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;

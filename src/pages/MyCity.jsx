import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyCity.css";

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get("https://api.weatherapi.com/v1/current.json", {
          params: {
            key: "4a313da1e3bd4be39c2181704252004",
            q: "Kyiv",
            lang: "uk",
          },
        });
        setWeather(res.data);
      } catch (error) {
        console.error("Помилка при завантаженні погоди:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="my-city">
      <h1>Моє місто — Київ</h1>
      <p>Київ — столиця України, велике культурне, економічне й наукове місто.</p>

      {weather ? (
        <div className="weather-info">
          <h2>Погода зараз:</h2>
          <div className="weather-details">
            <p><strong>Температура:</strong> {weather.current.temp_c}°C</p>
            <p><strong>Опис:</strong> {weather.current.condition.text}</p>
            <p><strong>Координати:</strong> {weather.location.lat}, {weather.location.lon}</p>
            <p><strong>Місто:</strong> {weather.location.name}</p>
            <p><strong>Країна:</strong> {weather.location.country}</p>
            <img
              src={weather.current.condition.icon}
              alt="Weather icon"
              className="weather-icon"
            />
          </div>
        </div>
      ) : (
        <p>Завантаження погоди...</p>
      )}
    </div>
  );
}

export default MyCity;

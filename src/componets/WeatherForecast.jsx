// export default WeatherForecast;
// WeatherForecast.js
import React from 'react';
import useWeatherForecast from './useWeatherForecast.jsx';
import '../style/WeatherForecast.css';

function WeatherForecast({ city, countryCode, apiKey }) {
  const forecastData = useWeatherForecast(city, countryCode, apiKey);

  return (
    <div className='weatherDisplayThen'> 
      <h2>Прогноз на 5 дней для города {forecastData?.city?.name}</h2>
      <div className='forecastCards'>
        {forecastData && forecastData.list.map((day) => (
          <div key={day.dt} className='forecastCard'>
            <p className='thenData'>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>Температура: {day.main.temp}°C</p>
            <p>Ощущается как: {day.main.feels_like}°C</p>
            <p>На улице: {day.weather[0].description}</p>
            <p>Скорость ветра: {day.wind.speed} м/с</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForecast;

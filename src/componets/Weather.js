import React from 'react';
import '../style/Weather.css';

// Функция для преобразования градусов в человеко-читаемое направление ветра
function getWindDirection(degrees) {
  const directions = ['северное', 'северо-восточное', 'восточное', 'юго-восточное', 'южное', 'юго-западное', 'западное', 'северо-западное'];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

function Weather({ data }) {
  const temperature = data.main.temp;
  const feelsLike = data.main.feels_like;
  const weatherDescription = data.weather[0].description;
  const windSpeed = data.wind.speed;
  const windDirection = data.wind.deg;
  const sityName = data.name;
  const precipitation = data.main.humidity;
  const pressureAtmosphere = data.main.pressure;

  return (
    <div className='weatherDisplayNow'>
      <h2>Погода сейчас</h2>
      <hr/>
      <p>Температура: {temperature}°C</p>
      <p>Ощущается как: {feelsLike}°C</p>
      <p>Влажность: {precipitation}%</p>
      <p>Давление: {pressureAtmosphere}мм рт. ст.</p>
      <p>На улице: {weatherDescription}</p>
      <p>Скорость ветра: {windSpeed} м/с</p>
      <p>Направление ветра: {getWindDirection(windDirection)}</p>
      <p>Город: {sityName}</p>
    </div>
  );
}

export default Weather;

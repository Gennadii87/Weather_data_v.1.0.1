// WeatherDisplayOptions.js
import React from 'react';
import Weather from './Weather.jsx';
import WeatherForecast from './WeatherForecast.jsx';

const WeatherDisplayOptions = ({ weatherData, showForecast, selectedCity, customCity, countryCode, apiKey }) => {
  return (
    <>
      {weatherData && <Weather data={weatherData} />}
      {showForecast && <WeatherForecast city={customCity || selectedCity} countryCode={countryCode} apiKey={apiKey} />}
    </>
  );
};

export default WeatherDisplayOptions;

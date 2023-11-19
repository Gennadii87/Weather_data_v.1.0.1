// WeatherDisplayOptions.js
import React from 'react';
import Weather from './Weather';
import WeatherForecast from './WeatherForecast';

const WeatherDisplayOptions = ({ weatherData, showForecast, selectedCity, customCity, countryCode, apiKey }) => {
  return (
    <>
      {weatherData && <Weather data={weatherData} />}
      {showForecast && <WeatherForecast city={customCity || selectedCity} countryCode={countryCode} apiKey={apiKey} />}
    </>
  );
};

export default WeatherDisplayOptions;

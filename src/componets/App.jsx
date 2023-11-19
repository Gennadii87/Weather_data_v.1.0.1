import React from 'react';
import useWeatherData from './useWeatherData.jsx';
import CityOptions from './CityOptions.jsx';
import WeatherDisplayOptions from './WeatherDisplayOptions.jsx';
import Header from './Header.jsx';
import '../style/App.css';

function App() {
  const {
    weatherData,
    selectedCity,
    customCity,
    showForecast,
    apiKey,
    cities,
    handleCityChange,
    handleCustomCityChange,
    handleFetchData,
    handleShowForecast,
    error,
  } = useWeatherData();

  const displayOptions = <WeatherDisplayOptions weatherData={weatherData} showForecast={showForecast} selectedCity={selectedCity} customCity={customCity} countryCode="ru" apiKey={apiKey}/>;
  const selectOptions = <CityOptions cities={cities} />;
  const error404 = <p className='error404'>{error}</p>;

  return (
    <React.Fragment>
      <div className='content'>
      <Header onFetchData={handleFetchData} onShowForecast={handleShowForecast} />
      <main>
          <h1>Погода в городе</h1>
          <label>
            Выберите город:
            <select value={selectedCity} onChange={handleCityChange}>{selectOptions}</select>
          </label>
          <label>
            Или введите свой город:
            <input type="text" value={customCity} onChange={handleCustomCityChange} />
          </label>
          <div className='DisplayData'><div className='weatherDisplayData'>{error ? error404 : displayOptions}</div></div>
      </main>
      </div>
    </React.Fragment>
  );
}

export default App;

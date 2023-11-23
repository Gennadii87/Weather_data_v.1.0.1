// App.jsx
import React, { Suspense } from 'react';
import useWeatherData from './useWeatherData.jsx';
import '../style/App.css';

// Ленивая загрузка компонента
const WeatherDisplayOptions = React.lazy(() => import('./WeatherDisplayOptions.jsx'));
const CityOptions = React.lazy(() => import('./CityOptions.jsx'));
const Header = React.lazy(() => import('./Header.jsx'));

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

  const selectOptions = <CityOptions cities={cities} />;
  const error404 = <p className='error404'>{error}</p>;

  // Обработчик события нажатия клавиши Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleFetchData(); 
    }
  };

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
            <input type="text" value={customCity} onChange={handleCustomCityChange} onKeyDown={handleKeyDown} />
          </label>
          <div className='DisplayData'>
            <div className='weatherDisplayData'>
              {error ? (
                error404
              ) : (
                <Suspense fallback={<div>Loading...</div>}>
                  <WeatherDisplayOptions weatherData={weatherData} showForecast={showForecast} selectedCity={selectedCity} customCity={customCity} countryCode="ru" apiKey={apiKey} />
                </Suspense>
              )}
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;

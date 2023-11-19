import { useState } from 'react';

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Moscow');
  const [customCity, setCustomCity] = useState('');
  const [showForecast, setShowForecast] = useState(false);
  const [error, setError] = useState(null); // Добавляем состояние для ошибок
  const [apiKey] = useState('ec564e086b97545003bd9a24c585246b');

  const cities = ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yakutsk', 'Magadan', 'Khabarovsk', 'Yuzhno-Sakhalinsk'];

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setShowForecast(false);
    setError(null); // Сброс ошибки при изменении города
  };

  const handleCustomCityChange = (event) => {
    setCustomCity(event.target.value);
    setShowForecast(false);
    setError(null); // Сброс ошибки при изменении пользовательского города
  };

  const handleFetchData = async () => {
    try {
      const city = customCity || selectedCity;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}&units=metric`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        if (response.status === 404) {
          setError('Город не найден. Пожалуйста, проверьте правильность написания города.');
        } else {
          throw new Error('Сетевой запрос завершился неудачей');
        }
      } else {
        const data = await response.json();
        setWeatherData(data);
        setShowForecast(false);
        setError(null); // Сброс ошибки при успешном запросе
      }
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      setError('Произошла ошибка при получении данных. Пожалуйста, попробуйте еще раз.');
    }
  };

  const handleShowForecast = () => {
    setShowForecast(true);
  };

  return {
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
    error, // Возвращаем состояние ошибок из хука
  };
};

export default useWeatherData;

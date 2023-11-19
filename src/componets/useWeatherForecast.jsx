// useWeatherForecast.js
import { useState, useEffect } from 'react';

const useWeatherForecast = (city, countryCode, apiKey) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&lang=ru&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Сетевой запрос завершился неудачей');
        }

        const data = await response.json();

        // Отфильтровать только данные на полудень каждого дня
        const dailyForecast = data.list.filter(item => item.dt_txt.includes('12:00:00'));

        setForecastData({ city: data.city, list: dailyForecast });
      } catch (error) {
        console.error('Ошибка при получении прогноза на 5 дней:', error);
      }
    };

    fetchData();
  }, [city, countryCode, apiKey]);

  return forecastData;
};

export default useWeatherForecast;

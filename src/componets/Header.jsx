// Header.js
import React from 'react';
import '../style/Header.css';

function Header({ onFetchData, onShowForecast }) {
  return (
    <header>
      <div className='buttonData'>
        <button onClick={onFetchData}>Получить данные</button>
        <button onClick={onShowForecast}>Прогноз на 5 дней</button>
      </div>
    </header>
  );
}

export default Header;

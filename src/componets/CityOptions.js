// CityOptions.js
import React from 'react';

const CityOptions = ({ cities }) => {
  return (
    <>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </>
  );
};

export default CityOptions;

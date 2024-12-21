import React, { useContext } from "react";
import { MusicWeatherContext } from "../context/MusicWeatherContext";

const CountrySelect = () => {
  const { countriesInOrder, countryHandler } = useContext(MusicWeatherContext);

  return (
    <select
      onChange={countryHandler}
      className="h-8 w-52 rounded-lg text-center"
    >
      <option value={"---"} selected disabled>
        ---
      </option>
      {countriesInOrder.map((oneCountry, idx) => (
        <option key={idx} value={oneCountry.code}>
          {oneCountry.country}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;

import React, { useContext } from "react";
import { MusicWeatherContext } from "../context/MusicWeatherContext";

const CitySelect = () => {
  const { citiesArray, cityHandler } = useContext(MusicWeatherContext);

  return (
    <>
      <select
        onChange={cityHandler}
        className="h-8 w-52 rounded-lg text-center"
      >
        <option selected disabled>
          ---
        </option>
        {citiesArray.map((oneCity, idx) => (
          <option key={idx} value={oneCity.name}>
            {oneCity.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CitySelect;

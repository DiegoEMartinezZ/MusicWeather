import React from "react";

const CitiesOptions = ({ country }) => {
  return (
    <section>
      <label className="m-2 flex"> Select a City: </label>
      <select value={country} onChange={countryHandler}>
        {weatherTest[country].cities.map((oneCity, idx) => (
          <option key={idx} value={oneCity.city_name}>
            {oneCity.city_name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default CitiesOptions;

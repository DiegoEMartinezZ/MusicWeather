import React from "react";
import CountrySection from "../country/CountrySection";
import CitySection from "../city/CitySection";

const SectionCityCountry = () => {
  return (
    <ul className="my-3 text-center text-bright-sun-950 font-base">
      <CountrySection />
      <CitySection />
    </ul>
  );
};

export default SectionCityCountry;

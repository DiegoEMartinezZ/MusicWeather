import React, { useContext } from "react";
import MainTitle from "../ui/txt/MainTitle";
import SectionCityCountry from "../sectionCityCountry/SectionCityCountry";
import { MusicWeatherContext } from "../context/MusicWeatherContext";
import ButtonToViews from "../ui/buttons/ButtonToViews";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

const Content = () => {
  const { checkCityInfo, weatherData, theme } = useContext(MusicWeatherContext);
  return (
    <section
      className={`${
        theme === "light"
          ? "bg-gradient-to-b from-bright-sun-300 to-bright-sun-500"
          : "bg-black"
      } h-screen text-center `}
    >
      <div className="text-dark text-center flex flex-col items-center justify-center h-screen">
        <MainTitle />
        <SectionCityCountry />
        {weatherData && <ButtonToViews handler={checkCityInfo} icon={faPlay} />}
      </div>
    </section>
  );
};

export default Content;

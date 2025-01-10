import React, { useContext } from "react";
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
        <img
          src={`${
            theme === "light" ? "/img/logoLight.png" : "/img/logoDark.png"
          } `}
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-72"
        />

        <SectionCityCountry />
        {weatherData.toString().length > 0 && (
          <ButtonToViews handler={checkCityInfo} icon={faPlay} />
        )}
      </div>
    </section>
  );
};

export default Content;

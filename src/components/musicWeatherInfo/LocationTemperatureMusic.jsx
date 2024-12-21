import React, { useContext } from "react";
import { MusicWeatherContext } from "../context/MusicWeatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons/faDroplet";
import { faWind } from "@fortawesome/free-solid-svg-icons/faWind";
import Page401 from "../../views/Page401";
import LocationInfo from "./location/LocationInfo";
import ButtonToViews from "../ui/buttons/ButtonToViews";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import NavBarMain from "../navbar/NavBarMain";
import MusicInfo from "./music/MusicInfo";

const LocationTemperatureMusic = () => {
  //Info of the Weather API depending of each city
  const { weatherData, theme, favCity, showMessage, message, btnFlag } =
    useContext(MusicWeatherContext);

  return weatherData < 0 ? (
    <Page401 />
  ) : (
    <>
      <NavBarMain />
      <div className="absolute right-0 left-0 top-44">
        <LocationInfo />
        <div
          className={`${
            btnFlag === false ? "hidden" : "block"
          } absolute right-0 left-0 lg:m-auto lg:justify-center sm:px-16`}
        >
          <ButtonToViews icon={faStar} handler={favCity} />
        </div>
        <div
          className={` ${
            theme === "light" ? "text-bright-sun-950" : "text-bright-sun-400"
          } flex items-center justify-center rounded-full w-64 h-64 mt-6 mb-10 m-auto border-8 border-bright-sun-50`}
        >
          <div className="flex flex-col">
            <h1>{weatherData.condition.text}</h1>
            <h1 className="font-medium  text-7xl">
              {weatherData.temp_c.toFixed(0)}°c
            </h1>

            <section className="mt-4 flex">
              <div className="mx-2 flex justify-center items-center ">
                <FontAwesomeIcon icon={faDroplet} className="mx-1" />
                <h3>{weatherData.humidity} % </h3>
              </div>
              <div className="mx-2 flex justify-center items-center t">
                <FontAwesomeIcon icon={faWind} className="mx-1" />
                <h3>{weatherData.gust_kph} Km/h </h3>
              </div>
            </section>
          </div>
        </div>

        {showMessage && (
          <div
            className={`bg-bright-sun-950 text-white fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-md transition-opacity duration-300`}
          >
            {message}
          </div>
        )}
        <MusicInfo />
      </div>
    </>
  );
};

export default LocationTemperatureMusic;

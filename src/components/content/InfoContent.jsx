import React, { useContext } from "react";
import LocationTemperatureMusic from "../musicWeatherInfo/LocationTemperatureMusic";
import { MusicWeatherContext } from "../context/MusicWeatherContext";

const InfoContent = () => {
  const { theme } = useContext(MusicWeatherContext);
  return (
    <div
      className={`${
        theme === "light"
          ? "bg-gradient-to-b from-bright-sun-300 to-bright-sun-500"
          : "bg-black"
      } h-screen text-center`}
    >
      <LocationTemperatureMusic />
    </div>
  );
};

export default InfoContent;

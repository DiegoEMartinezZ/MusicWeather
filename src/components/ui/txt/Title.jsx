import React, { useContext } from "react";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const Title = ({ title }) => {
  const { isDay } = useContext(MusicWeatherContext);
  return (
    <>
      <div
        className={`${
          isDay == 0 ? "text-bright-sun-400" : "text-bright-sun-950"
        } flex items-center justify-center `}
      >
        <h1 className="text-3xl font-bold">{title} </h1>
      </div>
    </>
  );
};

export default Title;

import React, { useContext } from "react";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const Title = ({ title }) => {
  const { theme } = useContext(MusicWeatherContext);
  return (
    <>
      <div
        className={`${
          theme == "light" ? "text-bright-sun-950" : "text-bright-sun-500"
        } flex items-center justify-center `}
      >
        <h1 className="text-3xl font-bold">{title} </h1>
      </div>
    </>
  );
};

export default Title;

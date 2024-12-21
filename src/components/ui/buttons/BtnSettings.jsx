import React, { useContext } from "react";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const BtnSettings = ({ handler, txt }) => {
  const { theme } = useContext(MusicWeatherContext);
  return (
    <ol
      onClick={handler}
      className={`${
        theme === "light" ? "text-bright-sun-400" : "text-black"
      } cursor-pointer `}
    >
      {txt}
    </ol>
  );
};

export default BtnSettings;

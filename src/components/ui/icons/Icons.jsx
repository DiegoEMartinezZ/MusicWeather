import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const Icons = ({ iconName, handler }) => {
  const { theme } = useContext(MusicWeatherContext);
  return (
    <FontAwesomeIcon
      icon={iconName}
      className={`${
        theme === "light" ? "text-bright-sun-950" : "text-bright-sun-400"
      } mx-4 cursor-pointer `}
      onClick={handler}
    />
  );
};

export default Icons;

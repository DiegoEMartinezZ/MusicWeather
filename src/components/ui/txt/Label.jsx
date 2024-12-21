import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const Label = ({ icon, txt }) => {
  const { theme } = useContext(MusicWeatherContext);

  return (
    <label
      className={`${
        theme === "light" ? "text-bright-sun-950" : "text-bright-sun-300"
      } m-2 mt-8 font-semibold uppercase text-sm flex items-center justify-center`}
    >
      <FontAwesomeIcon icon={icon} className="px-1" /> {txt}
    </label>
  );
};

export default Label;

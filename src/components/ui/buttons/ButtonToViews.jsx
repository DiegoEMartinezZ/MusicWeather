import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const ButtonToViews = ({ icon, handler }) => {
  const { theme } = useContext(MusicWeatherContext);
  return (
    <>
      <button
        className={`${
          theme === "light" ? "bg-bright-sun-950" : "bg-bright-sun-400"
        }  text-white  p-1 px-4 rounded-full m-3 `}
        onClick={handler}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    </>
  );
};

export default ButtonToViews;

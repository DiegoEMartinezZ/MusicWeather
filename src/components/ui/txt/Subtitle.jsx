import React, { useContext } from "react";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const Subtitle = ({ copy }) => {
  const { theme } = useContext(MusicWeatherContext);
  return (
    <>
      <h4
        className={`${
          theme === "light" ? "text-bright-sun-950" : "text-bright-sun-200"
        } font-light  tracking-widest`}
      >
        {copy}
      </h4>
    </>
  );
};

export default Subtitle;

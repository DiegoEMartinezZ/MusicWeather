import React, { useContext } from "react";
import Icons from "./Icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const DarkMode = () => {
  const { darkModeTrigger, btnDarkMode } = useContext(MusicWeatherContext);
  const statusDarkMode = btnDarkMode == true ? faMoon : faSun;
  return (
    <>
      <Icons iconName={statusDarkMode} handler={darkModeTrigger} />
    </>
  );
};

export default DarkMode;

import React, { useContext, useState } from "react";
import { MusicWeatherContext } from "../context/MusicWeatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import BtnSettings from "../ui/buttons/BtnSettings";
import DarkMode from "../ui/icons/DarkMode";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { goToFavoriteCities, theme } = useContext(MusicWeatherContext);

  const [showSettings, setShowSettings] = useState(false);
  const [settingsIcon, setSettingsIcon] = useState(true);

  const visibleSettings = () => {
    setShowSettings(!showSettings);
    setSettingsIcon(!settingsIcon);
  };

  const conditionSettings = settingsIcon == true ? faStar : faXmark;
  return (
    <>
      <nav className="absolute right-0 left-0 flex justify-end p-5 text-bright-sun-950">
        <div>
          <DarkMode />
          <FontAwesomeIcon
            icon={conditionSettings}
            onClick={visibleSettings}
            className={`${
              theme === "light" ? "text-bright-sun-950" : "text-bright-sun-400"
            } mx-4 cursor-pointer `}
          />
        </div>

        <ul
          className={`${showSettings == true ? "block" : "hidden"} ${
            theme === "light" ? "bg-bright-sun-950" : "bg-bright-sun-400"
          } p-3 rounded-lg text-white text-right absolute right-4 top-14`}
        >
          <BtnSettings handler={goToFavoriteCities} txt={"Favorite Cities"} />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

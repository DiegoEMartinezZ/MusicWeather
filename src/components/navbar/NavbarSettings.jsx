import React, { useContext } from "react";
import { MusicWeatherContext } from "../context/MusicWeatherContext";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import DarkMode from "../ui/icons/DarkMode";
import Icons from "../ui/icons/Icons";

const NavbarSettings = () => {
  const { goToHome, theme } = useContext(MusicWeatherContext);
  return (
    <nav
      className={`${
        theme === "light" ? "text-bright-sun-950" : "text-bright-sun-400"
      } flex justify-end items-center p-5`}
    >
      <div>
        <DarkMode />
        <Icons iconName={faHome} handler={goToHome} />
      </div>
    </nav>
  );
};

export default NavbarSettings;

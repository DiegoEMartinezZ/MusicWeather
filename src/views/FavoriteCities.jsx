import React, { useContext } from "react";
import NavbarSettings from "../components/navbar/NavbarSettings";
import { MusicWeatherContext } from "../components/context/MusicWeatherContext";
import TitleFavoriteCities from "../components/ui/txt/TitleFavoriteCities";
import FavoriteCity from "../components/FavoriteCities/FavoriteCity";

const FavoriteCities = () => {
  const { theme } = useContext(MusicWeatherContext);
  return (
    <section
      className={`${
        theme === "light"
          ? "bg-gradient-to-b from-bright-sun-300 to-bright-sun-500"
          : "bg-black"
      }  h-screen text-center `}
    >
      <NavbarSettings />
      <TitleFavoriteCities />
      <FavoriteCity />
    </section>
  );
};

export default FavoriteCities;

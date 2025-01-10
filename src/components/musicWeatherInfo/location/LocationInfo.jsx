import React, { useContext } from "react";
import Title from "../../ui/txt/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";
import TitleFavoriteCities from "../../ui/txt/TitleFavoriteCities";

const LocationInfo = () => {
  const { locationData, isDay } = useContext(MusicWeatherContext);

  return (
    <>
      <section
        className={`pb-3 flex flex-col ${
          isDay == 0 ? "text-bright-sun-400" : "text-bright-sun-950"
        } justify-center items-center 2xl:mt-24`}
      >
        <TitleFavoriteCities favCity={locationData.name} />
        <div className="flex items-center">
          <FontAwesomeIcon icon={faLocationDot} className="mr-2 " />
          <h3> {locationData.country} </h3>
        </div>
      </section>
    </>
  );
};

export default LocationInfo;

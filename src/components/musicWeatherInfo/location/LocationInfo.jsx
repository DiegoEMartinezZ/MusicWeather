import React, { useContext } from "react";
import Title from "../../ui/txt/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const LocationInfo = () => {
  const { locationData, theme } = useContext(MusicWeatherContext);

  return (
    <>
      <section
        className={`pb-3 flex flex-col ${
          theme === "light" ? "text-bright-sun-950" : "text-bright-sun-400"
        } justify-center items-center 2xl:mt-24`}
      >
        <Title title={locationData.name} />
        <div className="flex items-center">
          <FontAwesomeIcon icon={faLocationDot} className="mr-2 " />
          <h3> {locationData.country} </h3>
        </div>
      </section>
    </>
  );
};

export default LocationInfo;

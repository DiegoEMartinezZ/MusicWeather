import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const MusicInfo = () => {
  const { theme } = useContext(MusicWeatherContext);

  return (
    <section>
      <div
        className={`relative ${
          theme === "light" ? "bg-bright-sun-950" : "bg-bright-sun-400"
        } py-1 text-left px-4 rounded-3xl w-10/12 m-auto sm:w-1/2 lg:w-2/5 xl:w-1/4`}
      >
        <FontAwesomeIcon
          icon={faMusic}
          className={`absolute -right-2 -top-2 bg-white p-2 ${
            theme === "light" ? "text-bright-sun-950" : "text-bright-sun-400"
          } rounded-full h-4 w-4`}
        />
        <div
          className={`${
            theme === "light" ? "text-white" : "text-black"
          } py-3  `}
        >
          <h1 className="text-lg">Song Name</h1>
          <h2 className="text-sm font-light">Band's name</h2>
        </div>
      </div>
    </section>
  );
};

export default MusicInfo;

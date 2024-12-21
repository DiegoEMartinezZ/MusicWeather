import React, { useContext } from "react";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";
import SubtitleSettings from "../txt/SubtitleSettings";

const BtnTemperature = () => {
  const { temperature, conversionUsed } = useContext(MusicWeatherContext);
  return (
    <>
      <SubtitleSettings title={"Conversion"} />
      <button
        className="font-medium p-3 w-1/2 rounded-lg bg-bright-sun-400 text-bright-sun-900"
        onClick={conversionUsed}
      >
        {temperature}
      </button>
    </>
  );
};

export default BtnTemperature;

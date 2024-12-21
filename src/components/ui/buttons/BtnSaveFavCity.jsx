import React, { useContext } from "react";
import { MusicWeatherContext } from "../../context/MusicWeatherContext";

const BtnSaveFavCity = ({ txt, handler }) => {
  const { btnFlag } = useContext(MusicWeatherContext);

  return (
    <button
      onClick={handler}
      className={`${
        btnFlag ? "bg-saved" : "bg-remove"
      } text-white px-4 py-2 rounded-xl my-6 sm:mx-16 lg:mx-8 `}
    >
      {txt}
    </button>
  );
};

export default BtnSaveFavCity;

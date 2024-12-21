import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnFavoriteCities = ({ handler, icon }) => {
  return (
    <button className="mx-2 text-dark-ebony-950" onClick={handler}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default BtnFavoriteCities;

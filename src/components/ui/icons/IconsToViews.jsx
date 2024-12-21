import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconsToViews = ({ name, handler }) => {
  return (
    <FontAwesomeIcon
      icon={name}
      className="absolute right-0 p-5 cursor-pointer"
      onClick={handler}
    />
  );
};

export default IconsToViews;

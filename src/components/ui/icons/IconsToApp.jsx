import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconsToApp = ({ name, handler }) => {
  return (
    <FontAwesomeIcon
      icon={name}
      className="absolute left-0 p-5 cursor-pointer"
      onClick={handler}
    />
  );
};

export default IconsToApp;

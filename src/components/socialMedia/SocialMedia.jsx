import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = ({ url, name }) => {
  return (
    <a href={url} target="_blank" rel="nofollow noopener noreferrer">
      <FontAwesomeIcon icon={name} />
    </a>
  );
};

export default SocialMedia;

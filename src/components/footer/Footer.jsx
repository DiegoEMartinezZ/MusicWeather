import React, { useContext } from "react";
import {
  faBehance,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "../socialMedia/SocialMedia";
import { MusicWeatherContext } from "../context/MusicWeatherContext";

const Footer = () => {
  const { theme } = useContext(MusicWeatherContext);
  return (
    <>
      <footer
        className={`${
          theme === "light" ? "text-bright-sun-950" : "text-bright-sun-300"
        } absolute w-auto bottom-0 right-0 left-0 text-center p-5 text-xs italic font-light lg:w-1/3 lg:block lg:m-auto`}
      >
        <div className="p-3 flex justify-around">
          <SocialMedia
            name={faInstagram}
            url={"https://www.instagram.com/lowoncyan_"}
          />
          <SocialMedia
            name={faLinkedin}
            url={"https://www.linkedin.com/in/diegomz/"}
          />
          <SocialMedia
            name={faGithub}
            url={"https://github.com/DiegoEMartinezZ"}
          />
          <SocialMedia
            name={faBehance}
            url={"https://www.behance.net/lowoncyan_"}
          />
        </div>
        <h4 className="text-xs"> Diego Martínez - 2024 </h4>
      </footer>
    </>
  );
};

export default Footer;
import React from "react";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import Label from "../ui/txt/Label";
import CountrySelect from "./CountrySelect";

const CountrySection = () => {
  return (
    <li>
      <Label icon={faEarthAmericas} txt={"Select a country :"} />
      <CountrySelect />
    </li>
  );
};

export default CountrySection;

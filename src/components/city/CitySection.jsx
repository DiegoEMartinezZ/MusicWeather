import React from "react";
import Label from "../ui/txt/Label";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import CitySelect from "./CitySelect";

const CitySection = () => {
  return (
    <li>
      <div>
        <Label icon={faCity} txt={"Select a city :"} />
        <CitySelect />
      </div>
    </li>
  );
};

export default CitySection;

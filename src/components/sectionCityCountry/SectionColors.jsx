import React from "react";
import SubtitleSettings from "../ui/txt/SubtitleSettings";
import BtnColorSettings from "../ui/buttons/BtnColorSettings";

const SectionColors = () => {
  return (
    <section>
      <SubtitleSettings title={"Change Style"} />
      <BtnColorSettings primaryColor={"amarillo"} secondaryColor={"negro"} />
      <BtnColorSettings primaryColor={"rojo"} secondaryColor={"azul"} />
      <BtnColorSettings primaryColor={"verde"} secondaryColor={"blanco"} />
    </section>
  );
};

export default SectionColors;

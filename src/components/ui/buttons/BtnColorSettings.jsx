import React from "react";

const BtnColorSettings = ({ primaryColor, secondaryColor }) => {
  return (
    <button className=" cursor-pointer my-2 flex justify-center m-auto bg-bright-sun-900 p-1 rounded-md">
      <div className="w-32 h-16 m-2 bg-bright-sun-50">{primaryColor}</div>
      <div className="w-32 h-16 m-2 bg-bright-sun-100">{secondaryColor}</div>
    </button>
  );
};

export default BtnColorSettings;

import React from "react";

const TitleFavoriteCities = ({ favCity }) => {
  return (
    <>
      <div className="flex  items-center justify-center">
        <h1 className="text-3xl font-bold">{favCity} </h1>
      </div>
    </>
  );
};

export default TitleFavoriteCities;

import React from "react";
import "../styles/plantItem.css";
import CareScale from "./CareScale";

const PlantItem = ({ name, cover, id, light, water }) => {
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <li key={id} className="imj-plant-item" onClick={handleClick}>
      <img
        className="imj-plant-item-cover"
        src={cover}
        alt={`${name} cover`}
      ></img>
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
};

export default PlantItem;

import React from "react";
import classes from "../../scss/card.module.scss";

const Card = ({ name, img, options }) => {
  return (
    <div className={classes["card"]}>
      <img src={img} alt={name} className={classes.image} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;

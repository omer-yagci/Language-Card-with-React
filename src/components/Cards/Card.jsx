import React, { useState } from "react";
import classes from "../../scss/card.module.scss";

const Card = ({ name, img, options }) => {
  const [info, setInfo] = useState(true);
  const clickHandler = () => {
    setInfo(!info);
  };
  return (
    <div className={classes["card"]} onClick={clickHandler}>
      {info && (
        <div>
          <img src={img} alt={name} className={classes.image} />
          <h3>{name}</h3>
        </div>
      )}
      {!info && (
        <ul>
          {options.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Card;

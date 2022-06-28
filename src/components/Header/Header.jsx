import React from "react";
import ReactImage from "../../assets/react.svg";
import classes from "../../scss/header.module.scss";

const Header = () => {
  return (
    <div className={classes.container}>
      <img src={ReactImage} alt="react" className={classes.image} />
    </div>
  );
};

export default Header;

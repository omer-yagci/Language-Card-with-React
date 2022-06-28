import React from "react";
import classes from "../../scss/main.module.scss";
import { languages } from "../../util/data";
import Card from "../Cards/Card";

const Main = () => {
  console.log(languages);
  return (
    <div className={classes.container}>
      <h1>Languages</h1>
      {languages.map((items, index) => {
        const { name, img, options } = items;
        return <Card name={name} img={img} options={options} key={index} />;
      })}
    </div>
  );
};

export default Main;

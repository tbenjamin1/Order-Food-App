import React from "react";
import classes from "./MealsSumary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Delicious food, Delivered To You</h1>
      <p>
        chose your favorite meal from our broad selection of available meals and
        enjoy a delicious lunch or dinner at home
      </p>
      <p>
        <strong>
          {" "}
          all our meals are cooked with high-quality ingredients,{" "}
        </strong>
        just-in-time and of course by expected chefs?
      </p>
    </section>
  );
};

export default MealsSummary;

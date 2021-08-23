import React from "react";
import classes from "./Summary.module.css";

const Summary = () => {
    return (
      <section className={classes.summary}>
        <h2>Scooter Mail Army, Delivered To You</h2>
        <p>
          A react App. Choose your user and your mail turn. There are only 8 mailman available every half hour.
        </p>
      </section>
    );
  };

export default Summary;

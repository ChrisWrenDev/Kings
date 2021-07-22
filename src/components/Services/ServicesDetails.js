import classes from "./ServicesDetails.module.css";
import Step from "../UI/Step";
import Seperator from "../UI/Seperator";
import React from "react";

const ServicesDetails = () => {
  return (
    <div className={classes.services_details}>
      <Step>1</Step>
      <h2 className={classes.services_details__title}>Choose Your Services</h2>
      <Seperator type={"light"} />
      <p className={classes.services_details__text}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
    </div>
  );
};

export default ServicesDetails;

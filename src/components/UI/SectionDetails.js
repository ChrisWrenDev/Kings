import classes from "./SectionDetails.module.css";
import Step from "./Step";
import SectionHeading from "./SectionHeading";
import Seperator from "./Seperator";
import SectionDescription from "./SectionDescription";
import React from "react";

const SectionDetails = (props) => {
  return (
    <div className={classes.details}>
      {props.details.step > 0 && <Step>{props.details.step}</Step>}
      <SectionHeading type={props.details.type}>
        {props.details.title}
      </SectionHeading>
      <Seperator type={props.details.type} />
      <SectionDescription type={props.details.type}>
        {props.details.description}
      </SectionDescription>
    </div>
  );
};

export default SectionDetails;

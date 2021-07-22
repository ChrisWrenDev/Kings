import classes from "./Step.module.css";

const Step = function (props) {
  return <p className={classes.step}>Step {props.children}</p>;
};

export default Step;

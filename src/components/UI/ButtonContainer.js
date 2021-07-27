import classes from "./ButtonContainer.module.css";

const ButtonContainer = function (props) {
  return <div className={classes.btn__container}>{props.children}</div>;
};

export default ButtonContainer;

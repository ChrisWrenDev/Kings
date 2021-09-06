import classes from "./Arrow.module.css";

const Arrow = function (props) {
  return (
    <div onClick={props.changeCounter} className={classes.arrow}>
      {props.children}
    </div>
  );
};

export default Arrow;

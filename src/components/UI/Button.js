import classes from "./Button.module.css";

const Button = function (props) {
  const classList = `${classes.btn} ${
    props.status ? classes["btn--add"] : classes["btn--remove"]
  } ${props.className}`;
  return <button className={classList}>{props.status ? "+" : "-"}</button>;
};

export default Button;

import classes from "./Button.module.css";

const Button = function (props) {
  return (
    <button
      className={`${classes.btn} ${
        props.status ? classes["btn--add"] : classes["btn--remove"]
      }`}
    >
      {props.status ? "+" : "-"}
    </button>
  );
};

export default Button;

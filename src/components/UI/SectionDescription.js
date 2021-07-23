import classes from "./SectionDescription.module.css";

const SectionDescription = function (props) {
  return (
    <p
      className={`${classes.details__description} ${
        props.type === "light"
          ? classes["details__description--light"]
          : classes["details__description--dark"]
      }`}
    >
      {props.children}
    </p>
  );
};

export default SectionDescription;

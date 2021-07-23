import classes from "./SectionHeading.module.css";

const SectionHeading = function (props) {
  return (
    <h2
      className={`${classes.details__title} ${
        props.type === "light"
          ? classes["details__title--light"]
          : classes["details__title--dark"]
      }`}
    >
      {props.children}
    </h2>
  );
};

export default SectionHeading;

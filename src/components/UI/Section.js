import classes from "./Section.module.css";

const Section = function (props) {
  return (
    <section
      style={props.style}
      className={`${classes.section} ${
        props.type === "light"
          ? classes["section--light"]
          : classes["section--dark"]
      }`}
    >
      {props.children}
    </section>
  );
};

export default Section;

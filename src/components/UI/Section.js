import classes from "./Section.module.css";

const Section = function (props) {
  const classList = `${classes.section} ${
    props.type === "light"
      ? classes["section--light"]
      : classes["section--dark"]
  } ${props.className}`;
  return (
    <section
      id={props.id}
      style={props.style}
      className={classList}
      onClick={props.onClick}
    >
      {props.children}
    </section>
  );
};

export default Section;

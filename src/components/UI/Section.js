import classes from "./Section.module.css";

const Section = function (props) {
  const classList = `${classes.section} ${
    props.type === "light"
      ? classes["section--light"]
      : classes["section--dark"]
  } ${props.className}`;
  return (
    <section style={props.style} className={classList}>
      {props.children}
    </section>
  );
};

export default Section;

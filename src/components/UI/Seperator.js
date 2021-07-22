import classes from "./Seperator.module.css";
import seperatorLight from "../../assets/seperator_light.png";
import seperatorDark from "../../assets/seperator_dark.png";

const Seperator = function (props) {
  if (props.type === "dark") {
    return (
      <img className={classes.seperator} src={seperatorDark} alt="seperator" />
    );
  }
  if (props.type === "light") {
    return (
      <img className={classes.seperator} src={seperatorLight} alt="seperator" />
    );
  }
};

export default Seperator;

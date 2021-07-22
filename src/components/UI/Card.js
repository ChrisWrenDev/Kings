import classes from "./Card.module.css";

const Card = function (props) {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;

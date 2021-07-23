import classes from "./Card.module.css";

const Card = function (props) {
  const classGroup = `${classes.card} ${props.className}`;

  return (
    <div key={props.key} className={classGroup}>
      {props.children}
    </div>
  );
};

export default Card;

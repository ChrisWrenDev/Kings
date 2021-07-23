import classes from "./Quote.module.css";
import Card from "../UI/Card";

const Quote = function (props) {
  return (
    <Card key={props.id} className={classes.quote}>
      <p className={classes.quote__text}>{props.testimonial.quote}</p>
      <p className={classes.quote__name}>- {props.testimonial.name}</p>
    </Card>
  );
};

export default Quote;

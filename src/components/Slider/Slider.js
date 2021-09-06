import classes from "./Slider.module.css";
import Quote from "../Testimonials/Quote";
import Arrow from "./Arrow";

const Slider = function (props) {
  return (
    <div className={classes.slider}>
      <Arrow changeCounter={props.decreaseCounter}>&larr;</Arrow>
      <div className={classes.slider__slides}>
        <Quote
          key={props.testimonials[0].id}
          testimonial={props.testimonials[0]}
        />
        <Quote
          key={props.testimonials[1].id}
          testimonial={props.testimonials[1]}
        />
      </div>
      <Arrow changeCounter={props.increaseCounter}>&rarr;</Arrow>
    </div>
  );
};

export default Slider;

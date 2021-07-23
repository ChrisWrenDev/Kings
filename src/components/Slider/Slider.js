import classes from "./Slider.module.css";
import Quote from "../Testimonials/Quote";
import Arrow from "./Arrow";

const Slider = function (props) {
  return (
    <div className={classes.slider}>
      <Arrow>&larr;</Arrow>
      <div className={classes.slider__slides}>
        {props.testimonials.map((testimonial, index) => (
          <Quote id={index + 1} testimonial={testimonial} />
        ))}
      </div>
      <Arrow>&rarr;</Arrow>
    </div>
  );
};

export default Slider;

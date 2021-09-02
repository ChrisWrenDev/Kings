import { useState } from "react";
import classes from "./Slider.module.css";
import Quote from "../Testimonials/Quote";
import Arrow from "./Arrow";

const Slider = function (props) {
  const [counter, setCounter] = useState(0);
  const counterIncreaseHandler = function () {
    setCounter((prevCount) => 0 + prevCount + 1);
    console.log(counter);
  };
  const counterDecreaseHandler = function () {
    setCounter((prevCount) => prevCount--);
  };
  return (
    <div className={classes.slider}>
      <Arrow onClick={counterDecreaseHandler}>&larr;</Arrow>
      <div className={classes.slider__slides}>
        {props.testimonials.map((testimonial) => (
          <Quote key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <Arrow onClick={counterIncreaseHandler}>&rarr;</Arrow>
    </div>
  );
};

export default Slider;

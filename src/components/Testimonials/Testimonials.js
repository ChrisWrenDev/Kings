import { useState } from "react";
import Section from "../UI/Section";
import backgroundImg from "../../assets/global-background.jpg";
import SectionDetails from "../UI/SectionDetails";
import Slider from "../Slider/Slider";

const testimonialDetails = {
  step: 0,
  title: "What Our Clients Say",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  type: "light",
};

const testimonialQuotes = [
  {
    id: "q1",
    name: "Frank Burton 1",
    quote:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: "q2",
    name: "Frank Burton 2",
    quote:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: "q3",
    name: "Frank Burton 3",
    quote:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: "q4",
    name: "Frank Burton 4",
    quote:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: "q5",
    name: "Frank Burton 5",
    quote:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    id: "q6",
    name: "Frank Burton 6",
    quote:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

const Testimonials = () => {
  const [counter, setCounter] = useState(0);

  const counterIncreaseHandler = function () {
    setCounter((prevCounter) => {
      if (prevCounter < 4) {
        return 1 + prevCounter;
      } else {
        return 0;
      }
    });
  };

  const counterDecreaseHandler = function () {
    setCounter((prevCounter) => {
      if (prevCounter >= 1) {
        let count = prevCounter - 1;
        return count;
      } else {
        return 4;
      }
    });
  };

  let testimonials = testimonialQuotes.slice(counter, counter + 2);

  return (
    <Section
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <SectionDetails details={testimonialDetails} />
      <Slider
        testimonials={testimonials}
        increaseCounter={counterIncreaseHandler}
        decreaseCounter={counterDecreaseHandler}
      />
    </Section>
  );
};

export default Testimonials;

import Section from "../UI/Section";
import backgroundImg from "../../assets/global-background.jpg";
import SectionDetails from "../UI/SectionDetails";
import Slider from "../Slider/Slider";

const Testimonials = () => {
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

  let counter = 0;

  let testimonials = [
    testimonialQuotes[counter],
    testimonialQuotes[counter + 1],
  ];

  console.log(testimonials);

  return (
    <Section
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <SectionDetails details={testimonialDetails} />
      <Slider testimonials={testimonials} />
    </Section>
  );
};

export default Testimonials;

import classes from "./About.module.css";
import Section from "../UI/Section";
import SectionDetails from "../UI/SectionDetails";
import headIcon from "../../assets/Background_Icon.svg";

const aboutDetails = {
  step: 0,
  title: "Exclusively For Men",
  description:
    "Founded in 1948, Macho Barber Shop is the Authority in Men’s Grooming. We cater to men who are looking for an elevated barber shop experience.",
  type: "dark",
};

const About = () => {
  return (
    <Section type={"light"} id="about">
      <img className={classes.headIcon} src={headIcon} alt="headIcon" />
      <SectionDetails details={aboutDetails} />
    </Section>
  );
};

export default About;

import classes from "./About.module.css";
import headIcon from "../../assets/Background_Icon.svg";
import Seperator from "../UI/Seperator";

const About = () => {
  return (
    <section className={classes.about}>
      <img className={classes.headIcon} src={headIcon} alt="headIcon" />
      <h1>Exclusively For Men</h1>
      <Seperator type={"dark"} />
      <p>
        Founded in 1948, Macho Barber Shop is the Authority in Men’s Grooming.
        We cater to men who are looking for an elevated barber shop experience.
      </p>
    </section>
  );
};

export default About;

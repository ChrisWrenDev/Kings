import classes from "./About.module.css";
import seperator from "../../assets/seperator_dark.png";
import headIcon from "../../assets/Background_Icon.svg";

const About = () => {
  return (
    <section className={classes.about}>
      <img className={classes.headIcon} src={headIcon} alt="headIcon" />
      <h1>Exclusively For Men</h1>
      <img className={classes.seperator} src={seperator} alt="seperator" />
      <p>
        Founded in 1948, Macho Barber Shop is the uthority in Men’s Grooming. We
        cater to men who are looking for an elevated barber shop experience.
      </p>
    </section>
  );
};

export default About;

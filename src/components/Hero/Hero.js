import classes from "./Hero.module.css";
import backgoundImg from "../../assets/home-background.jpg";
import logoBadge from "../../assets/Home_Badge--White.svg";

const Hero = () => {
  return (
    <div
      className={classes.hero}
      style={{
        backgroundImage: `url(${backgoundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img className={classes.logo} src={logoBadge} alt="logo badge" />
    </div>
  );
};

export default Hero;

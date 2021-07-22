import classes from "./Services.module.css";
import backgroundImg from "../../assets/global-background.jpg";
import ServicesDetails from "./ServicesDetails";
import ServicesGroups from "./ServicesGroups";

const Services = () => {
  return (
    <section
      className={classes.services}
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <ServicesDetails />
      <ServicesGroups />
    </section>
  );
};

export default Services;

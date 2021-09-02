import ServiceItem from "./ServiceItem";
import Card from "../UI/Card";
import classes from "./ServicesBlock.module.css";

const ServicesBlock = function (props) {
  return (
    <Card key={props.id} className={classes.services__block}>
      <img
        className={classes["services__block--icon"]}
        src={props.icon}
        alt="service icon"
      />
      {props.services.map((item, index) => (
        <ServiceItem key={index + 1} details={item} />
      ))}
    </Card>
  );
};

export default ServicesBlock;

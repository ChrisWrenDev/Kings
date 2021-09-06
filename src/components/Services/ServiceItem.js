import { useContext } from "react";
import classes from "./ServiceItem.module.css";
import Button from "../UI/Button";
import AppointmentContext from "../../store/appointment-context";

const ServiceItem = function (props) {
  const appointmentCtx = useContext(AppointmentContext);

  const itemChangeHandler = function () {
    appointmentCtx.updateItemStatus(props.details, "services");
  };

  return (
    <div
      onClick={itemChangeHandler}
      key={props.details.id}
      className={classes["services-item"]}
    >
      <div
        className={`${classes["services-item__details"]} ${
          !props.details.status
            ? classes["services-item__details--add"]
            : classes["services-item__details--remove"]
        }`}
      >
        <h4 className={classes["services-item__title"]}>
          {props.details.name}
        </h4>
        <p
          className={`${classes["services-item__price"]} ${
            !props.details.status
              ? classes["services-item__price--add"]
              : classes["services-item__price--remove"]
          }`}
        >{`£${props.details.price}`}</p>
        <p
          className={`${classes["services-item__description"]} ${
            !props.details.status
              ? classes["services-item__description--add"]
              : classes["services-item__description--remove"]
          }`}
        >
          {props.details.description}
        </p>
      </div>
      <Button status={props.details.status} />
    </div>
  );
};
export default ServiceItem;

import { useState, useContext } from "react";
import classes from "./ServiceItem.module.css";
import Button from "../UI/Button";
import AppointmentContext from "../../store/appointment-context";

const ServiceItem = function (props) {
  const [itemStatus, setItemStatus] = useState(true);
  const appointmentCtx = useContext(AppointmentContext);

  const itemChangeHandler = function () {
    setItemStatus((prevStatus) => (!prevStatus ? true : false));

    if (itemStatus) {
      appointmentCtx.addItem({
        id: props.details.id,
        name: props.details.name,
        type: "services",
        price: props.details.price,
        description: props.details.description,
      });
    } else {
      appointmentCtx.removeItem({ id: props.details.id, type: "services" });
    }
  };

  return (
    <div
      onClick={itemChangeHandler}
      key={props.details.id}
      className={classes["services-item"]}
    >
      <div
        className={`${classes["services-item__details"]} ${
          itemStatus
            ? classes["services-item__details--add"]
            : classes["services-item__details--remove"]
        }`}
      >
        <h4 className={classes["services-item__title"]}>
          {props.details.name}
        </h4>
        <p
          className={`${classes["services-item__price"]} ${
            itemStatus
              ? classes["services-item__price--add"]
              : classes["services-item__price--remove"]
          }`}
        >{`£${props.details.price}`}</p>
        <p
          className={`${classes["services-item__description"]} ${
            itemStatus
              ? classes["services-item__description--add"]
              : classes["services-item__description--remove"]
          }`}
        >
          {props.details.description}
        </p>
      </div>
      <Button status={itemStatus} />
    </div>
  );
};
export default ServiceItem;

import { useState } from "react";
import classes from "./ServiceItem.module.css";
import Button from "../UI/Button";

const ServiceItem = function (props) {
  const [itemStatus, setItemStatus] = useState(true);

  const itemChangeHandler = function () {
    setItemStatus((prevStatus) => (!prevStatus ? true : false));
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

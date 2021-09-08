import classes from "./ServiceItem.module.css";
import Button from "../UI/Button";
import { ItemsContext } from "../../store/items-context";

const ServiceItem = function (props) {
  const { itemsDispatch } = ItemsContext();

  const itemChangeHandler = function () {
    itemsDispatch({
      type: "UPDATE_ITEM",
      item: props.details,
      group: "services",
    });
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

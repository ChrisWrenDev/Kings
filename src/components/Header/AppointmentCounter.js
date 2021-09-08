import classes from "./AppointmentCounter.module.css";
import { ItemsContext } from "../../store/items-context";

const AppointmentCounter = function () {
  const { itemsState } = ItemsContext();

  const servicesCounter = itemsState.services.filter(
    (item) => item.status
  ).length;
  const barbersCounter = itemsState.barbers.filter(
    (item) => item.status
  ).length;
  const productCounter = itemsState.products.filter(
    (item) => item.status
  ).length;

  const total = servicesCounter + barbersCounter + productCounter;

  return <div className={classes.counter}>{total}</div>;
};

export default AppointmentCounter;

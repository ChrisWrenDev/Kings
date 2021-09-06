import { useContext } from "react";
import AppointmentItem from "./AppointmentItem";
import classes from "./AppointmentDetails.module.css";
import AppointmentContext from "../../store/appointment-context";

const AppointmentDetails = function () {
  const appointmentCtx = useContext(AppointmentContext);

  const services = appointmentCtx.services.filter((item) => item.status);
  const barbers = appointmentCtx.barbers.filter((item) => item.status);
  const products = appointmentCtx.products.filter((item) => item.status);

  const removeItemHandler = function (item, group) {
    appointmentCtx.updateItemStatus(item, group);
  };

  return (
    <div className={classes["appointment-details"]}>
      <div className={classes["appointment-details__group"]}>
        <h3 className={classes["appointment-details__title"]}>Services</h3>
        {services.length === 0 && (
          <AppointmentItem status={false} groupName="Services" />
        )}
        {services.length > 0 &&
          services.map((item) => {
            return (
              <AppointmentItem
                key={item.id}
                status={true}
                item={item}
                groupName="Services"
                onRemove={removeItemHandler.bind(null, item, "services")}
              />
            );
          })}
      </div>
      <div className={classes["appointment-details__group"]}>
        <h3 className={classes["appointment-details__title"]}>Barbers</h3>
        {barbers.length === 0 && (
          <AppointmentItem status={false} groupName="Barbers" />
        )}
        {barbers.length > 0 &&
          barbers.map((item) => {
            return (
              <AppointmentItem
                key={item.id}
                status={item.status}
                item={item}
                groupName="Barbers"
                onRemove={removeItemHandler.bind(null, item, "barbers")}
              />
            );
          })}
      </div>
      <div className={classes["appointment-details__group"]}>
        <h3 className={classes["appointment-details__title"]}>Products</h3>
        {products.length === 0 && (
          <AppointmentItem status={false} groupName="Products" />
        )}
        {products.length > 0 &&
          products.map((item) => {
            return (
              <AppointmentItem
                key={item.id}
                status={item.status}
                item={item}
                groupName="Products"
                onRemove={removeItemHandler.bind(null, item, "products")}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AppointmentDetails;

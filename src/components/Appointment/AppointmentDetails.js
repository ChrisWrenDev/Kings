import { useContext } from "react";
import AppointmentItem from "./AppointmentItem";
import classes from "./AppointmentDetails.module.css";
import AppointmentContext from "../../store/appointment-context";

const AppointmentDetails = function () {
  const appointmentCtx = useContext(AppointmentContext);

  const services = appointmentCtx.services;
  const barbers = appointmentCtx.barbers;
  const products = appointmentCtx.products;

  const removeServiceHandler = function (item) {
    appointmentCtx.removeItem({ ...item, type: "services" });
  };
  const removeBarberHandler = function (item) {
    appointmentCtx.removeItem({ ...item, type: "barbers" });
  };
  const removeProductHandler = function (item) {
    appointmentCtx.removeItem({ ...item, type: "products" });
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
                onRemove={removeServiceHandler.bind(null, item)}
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
                status={true}
                item={item}
                groupName="Barbers"
                onRemove={removeBarberHandler.bind(null, item)}
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
                status={true}
                item={item}
                groupName="Products"
                onRemove={removeProductHandler.bind(null, item)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AppointmentDetails;

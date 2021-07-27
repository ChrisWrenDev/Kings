import AppointmentItem from "./AppointmentItem";
import classes from "./AppointmentDetails.module.css";

const AppointmentDetails = function (props) {
  return (
    <div className={classes["appointment-details"]}>
      <div className={classes["appointment-details__group"]}>
        <h3 className={classes["appointment-details__title"]}>Services</h3>
        <AppointmentItem status={false} groupName="Services" />
      </div>
      <div className={classes["appointment-details__group"]}>
        <h3 className={classes["appointment-details__title"]}>Barbers</h3>
        <AppointmentItem status={true} groupName="Barbers" />
      </div>
      <div className={classes["appointment-details__group"]}>
        <h3 className={classes["appointment-details__title"]}>Products</h3>
        <AppointmentItem status={true} groupName="Products" />
        <AppointmentItem status={true} groupName="Products" />
      </div>
    </div>
  );
};

export default AppointmentDetails;

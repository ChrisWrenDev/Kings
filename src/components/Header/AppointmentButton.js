import classes from "./AppointmentButton.module.css";

const AppointmentButton = function (props) {
  const classList = `${classes.btn} ${props.className}`;
  return (
    <button className={classList} onClick={props.onShowAppointment}>
      {props.callToAction}
    </button>
  );
};

export default AppointmentButton;

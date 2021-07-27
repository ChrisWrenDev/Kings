import Button from "../UI/Button";
import classes from "./AppointmentItem.module.css";

const AppointmentItem = function (props) {
  if (props.status) {
    return (
      <div className={classes["appointment-item"]}>
        <div className={classes["appointment-item__details"]}>
          <h4 className={classes["appointment-item__title"]}>Name</h4>
          <p className={classes["appointment-item__price"]}>£25</p>
        </div>
        <div>
          <Button className={classes["appointment-item__btn"]} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes["appointment-item"]}>
        <div className={classes["appointment-item__details"]}>
          <h4 className={classes["appointment-item__title"]}>
            No {props.groupName} have been added
          </h4>
          <p className={classes["appointment-item__price"]}>
            <a href={`#${props.groupName}`}>VIEW SERVICES</a>
          </p>
        </div>
      </div>
    );
  }
};

export default AppointmentItem;

import Button from "../UI/Button";
import classes from "./AppointmentItem.module.css";

const AppointmentItem = function (props) {
  if (props.status) {
    return (
      <div className={classes["appointment-item"]}>
        <div className={classes["appointment-item__details"]}>
          <h4 className={classes["appointment-item__title"]}>
            {props.item.name}
          </h4>
          <p className={classes["appointment-item__price"]}>
            {props.groupName === "Barbers"
              ? props.item.position
              : `£${props.item.price}`}
          </p>
        </div>
        <div onClick={props.onRemove}>
          <Button
            status={props.status}
            type="light"
            className={classes["appointment-item__btn"]}
          />
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
            <a
              href={`#${props.groupName}`}
            >{`VIEW ${props.groupName.toUpperCase()}`}</a>
          </p>
        </div>
      </div>
    );
  }
};

export default AppointmentItem;

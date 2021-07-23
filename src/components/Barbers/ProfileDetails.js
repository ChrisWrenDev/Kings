import classes from "./ProfileDetails.module.css";
import Button from "../UI/Button";

const ProfileDetails = function (props) {
  return (
    <div className={classes["profile-details"]}>
      <div
        className={`${classes["profile-details__info"]} ${
          props.status
            ? classes["profile-details__info--add"]
            : classes["profile-details__info--remove"]
        }`}
      >
        <h4 className={classes["profile-details__name"]}>
          {props.details.name}
        </h4>
        <p
          className={`${classes["profile-details__position"]} ${
            props.status
              ? classes["profile-details__position--add"]
              : classes["profile-details__position--remove"]
          }`}
        >
          {props.details.position}
        </p>
      </div>
      <div className={classes["profile-details__btn"]}>
        <Button status={props.status} />
      </div>
    </div>
  );
};

export default ProfileDetails;

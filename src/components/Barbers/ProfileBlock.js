import { useContext } from "react";
import classes from "./ProfileBlock.module.css";
import ProfileDetails from "./ProfileDetails";
import AppointmentContext from "../../store/appointment-context";

const ProfileBlock = function (props) {
  const appointmentCtx = useContext(AppointmentContext);

  const profileClickHandler = function () {
    appointmentCtx.updateItemStatus(props.details, "barbers");
  };

  return (
    <div className={classes.profileBlock} onClick={profileClickHandler}>
      <img src={props.details.img} alt="" />
      <ProfileDetails
        key={props.details.id}
        details={props.details}
        status={props.details.status}
      />
    </div>
  );
};

export default ProfileBlock;

import { useState, useContext } from "react";
import classes from "./ProfileBlock.module.css";
import ProfileDetails from "./ProfileDetails";
import AppointmentContext from "../../store/appointment-context";

const ProfileBlock = function (props) {
  const [profileStatus, setProfileStatus] = useState(true);
  const appointmentCtx = useContext(AppointmentContext);

  const profileClickHandler = function () {
    setProfileStatus((prevStatus) => (prevStatus ? false : true));

    if (profileStatus) {
      appointmentCtx.addItem({
        id: props.details.id,
        type: "barbers",
        name: props.details.name,
        position: props.details.position,
        img: props.details.img,
      });
    } else {
      appointmentCtx.removeItem({ id: props.details.id, type: "barbers" });
    }
  };

  return (
    <div className={classes.profileBlock} onClick={profileClickHandler}>
      <img src={props.details.img} alt="" />
      <ProfileDetails
        key={props.details.id}
        details={props.details}
        status={profileStatus}
      />
    </div>
  );
};

export default ProfileBlock;

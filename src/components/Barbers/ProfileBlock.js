import { useState } from "react";
import classes from "./ProfileBlock.module.css";
import ProfileDetails from "./ProfileDetails";

const ProfileBlock = function (props) {
  const [profileStatus, setProfileStatus] = useState(false);
  const profileClickHandler = function () {
    setProfileStatus((prevStatus) => (prevStatus ? false : true));
  };

  return (
    <div className={classes.profileBlock} onClick={profileClickHandler}>
      <img src={props.details.img} alt="" />
      <ProfileDetails details={props.details} status={profileStatus} />
    </div>
  );
};

export default ProfileBlock;

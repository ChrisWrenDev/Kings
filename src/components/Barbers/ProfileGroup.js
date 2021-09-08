import React from "react";
import classes from "./ProfileGroup.module.css";
import ProfileBlock from "./ProfileBlock";

const ProfileGroup = function (props) {
  return (
    <div className={classes.profileGroup}>
      {props.details.map((barber) => (
        <ProfileBlock key={barber.id} details={barber} />
      ))}
    </div>
  );
};

export default React.memo(ProfileGroup);

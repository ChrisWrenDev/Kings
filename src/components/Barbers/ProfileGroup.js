import classes from "./ProfileGroup.module.css";
import ProfileBlock from "./ProfileBlock";

const ProfileGroup = function (props) {
  return (
    <div className={classes.profileGroup}>
      {props.details.map((barber, index) => (
        <ProfileBlock key={`${index + 1}`} details={barber} />
      ))}
    </div>
  );
};

export default ProfileGroup;

import classes from "./ProfileBlock.module.css";
import ProfileDetails from "./ProfileDetails";
import { ItemsContext } from "../../store/items-context";

const ProfileBlock = function (props) {
  const { itemsDispatch } = ItemsContext();

  const profileClickHandler = function () {
    itemsDispatch({
      type: "UPDATE_ITEM",
      item: props.details,
      group: "barbers",
    });
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

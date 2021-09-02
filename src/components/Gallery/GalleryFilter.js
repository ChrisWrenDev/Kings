import classes from "./GalleryFilter.module.css";

const GalleryFilter = function (props) {
  return (
    <div className={classes.gallery__filter}>
      {props.items.map((group) => (
        <p key={group.id} onClick={props.onClick.bind(null, group)}>
          {group.name}
        </p>
      ))}
    </div>
  );
};

export default GalleryFilter;

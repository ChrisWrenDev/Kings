import classes from "./GalleryFilter.module.css";

const GalleryFilter = function (props) {
  return (
    <div className={classes.gallery__filter}>
      {props.items.map((group) => (
        <p
          key={group.id}
          className={`${classes["gallery__filter-text"]} ${
            group.name === props.active
              ? classes["gallery__filter-text--active"]
              : classes["gallery__filter-text-inactive"]
          }`}
          onClick={props.onClick.bind(null, group)}
        >
          {group.name}
        </p>
      ))}
    </div>
  );
};

export default GalleryFilter;

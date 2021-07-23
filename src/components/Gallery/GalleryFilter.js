import classes from "./GalleryFilter.module.css";

const GalleryFilter = function (props) {
  return (
    <div className={classes.gallery__filter}>
      {props.items.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

export default GalleryFilter;

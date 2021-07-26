import classes from "./GalleryImages.module.css";

const GalleryImages = function (props) {
  return (
    <div className={classes.gallery__images}>
      {props.imgs.map((image) => (
        <img src={image.img} alt={image.group} />
      ))}
    </div>
  );
};

export default GalleryImages;

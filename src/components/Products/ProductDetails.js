import Button from "../UI/Button";
import classes from "./ProductDetails.module.css";

const ProductDetails = function (props) {
  return (
    <div className={classes["product-details"]}>
      <div className={classes["product-details__info"]}>
        <h4 className={classes["product-details__title"]}>
          {props.details.name}
        </h4>
        <p className={classes["product-details__price"]}>
          £{props.details.price.toFixed(2)}
        </p>
      </div>
      <div className={classes["product-details__btn"]}>
        <Button status={props.status} />
      </div>
    </div>
  );
};

export default ProductDetails;

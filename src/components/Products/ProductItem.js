import { useContext } from "react";
import ProductDetails from "./ProductDetails";
import classes from "./ProductItem.module.css";
import AppointmentContext from "../../store/appointment-context";

const ProductItem = function (props) {
  const appointmentCtx = useContext(AppointmentContext);

  const productClickHandler = function () {
    appointmentCtx.updateItemStatus(props.item, "products");
  };
  return (
    <div
      key={props.id}
      className={classes["product-item"]}
      onClick={productClickHandler}
    >
      <img src={props.item.img} alt={props.item.name} />
      <ProductDetails details={props.item} status={props.item.status} />
    </div>
  );
};

export default ProductItem;

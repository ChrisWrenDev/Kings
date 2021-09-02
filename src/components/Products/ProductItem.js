import { useContext, useState } from "react";
import ProductDetails from "./ProductDetails";
import classes from "./ProductItem.module.css";
import AppointmentContext from "../../store/appointment-context";

const ProductItem = function (props) {
  const [productStatus, setProductStatus] = useState(true);
  const appointmentCtx = useContext(AppointmentContext);

  const productClickHandler = function () {
    setProductStatus((prevState) => (prevState ? false : true));

    if (productStatus) {
      appointmentCtx.addItem({
        id: props.item.id,
        type: "products",
        name: props.item.name,
        price: props.item.price,
        img: props.item.img,
      });
    } else {
      appointmentCtx.removeItem({ id: props.item.id, type: "products" });
    }
  };
  return (
    <div
      key={props.id}
      className={classes["product-item"]}
      onClick={productClickHandler}
    >
      <img src={props.item.img} alt={props.item.name} />
      <ProductDetails details={props.item} status={productStatus} />
    </div>
  );
};

export default ProductItem;

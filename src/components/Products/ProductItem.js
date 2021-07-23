import { useState } from "react";
import ProductDetails from "./ProductDetails";
import classes from "./ProductItem.module.css";

const ProductItem = function (props) {
  const [productStatus, setProductStatus] = useState(true);
  const productClickHandler = function () {
    setProductStatus((prevState) => (prevState ? false : true));
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

import ProductDetails from "./ProductDetails";
import classes from "./ProductItem.module.css";
import { ItemsContext } from "../../store/items-context";

const ProductItem = function (props) {
  const { itemsDispatch } = ItemsContext();

  const productClickHandler = function () {
    itemsDispatch({ type: "UPDATE_ITEM", item: props.item, group: "products" });
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

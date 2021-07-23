import classes from "./ProductGroup.module.css";
import ProductItem from "./ProductItem";

const ProductGroup = function (props) {
  return (
    <div className={classes.productGroup}>
      {props.items.map((item, index) => (
        <ProductItem id={index + 1} item={item} />
      ))}
    </div>
  );
};

export default ProductGroup;

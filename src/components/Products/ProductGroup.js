import classes from "./ProductGroup.module.css";
import ProductItem from "./ProductItem";

const ProductGroup = function (props) {
  return (
    <div className={classes.productGroup}>
      {props.items.map((item, index) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductGroup;

import { useState, useEffect } from "react";
import SectionDetails from "../UI/SectionDetails";
import Section from "../UI/Section";
import ProductGroup from "./ProductGroup";
import AppointmentButton from "../Header/AppointmentButton";
import ButtonContainer from "../UI/ButtonContainer";
import productImg1 from "../../assets/Product_Black-Hair-Scissor.png";
import productImg2 from "../../assets/Product_Shaving-Brush.png";
import productImg3 from "../../assets/Product_Classic-Straight-Razor.png";
import productImg4 from "../../assets/Product_Double-Edge-Razor.png";
import productImg5 from "../../assets/Product_Foldable-Hair-Comb.png";
import productImg6 from "../../assets/Product_Hair-Cleaner-Brush.png";
import productImg7 from "../../assets/Product_Shave-Cream-Cup.png";
import productImg8 from "../../assets/Product_Wooden-Hair-Brus.png";
import useHttp from "../../hooks/use-http";
import { ItemsContext } from "../../store/items-context";

const productSectionDetails = {
  step: 3,
  title: "Our Products",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  type: "dark",
};

const Products = (props) => {
  const [loadProducts, setLoadProducts] = useState(false);

  const { itemsState, itemsDispatch } = ItemsContext();

  const { loadingStatus, error, httpRequest } = useHttp();

  useEffect(() => {
    const transformData = (products) => {
      if (loadProducts) return;

      const productImages = [
        productImg1,
        productImg2,
        productImg3,
        productImg4,
        productImg5,
        productImg6,
        productImg7,
        productImg8,
      ];

      const productData = [];

      let index = 0;
      for (const id in products) {
        productData.push({
          id: id,
          name: products[id].name,
          price: products[id].price,
          img: productImages[index],
          status: false,
        });
        index++;
      }

      itemsDispatch({
        type: "ADD_ITEMS",
        items: productData,
        group: "products",
      });
    };

    httpRequest(
      {
        url: "https://kings-barbers-85e2a-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      },
      transformData
    );

    setLoadProducts(true);
  }, [httpRequest, loadProducts, itemsDispatch]);

  return (
    <Section id="products" type={"light"}>
      <SectionDetails details={productSectionDetails} />
      {!loadingStatus && !error && <ProductGroup items={itemsState.products} />}
      {loadingStatus && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ButtonContainer>
        <AppointmentButton
          callToAction="Submit Product Request"
          onShowAppointment={props.onShowAppointment}
        />
      </ButtonContainer>
    </Section>
  );
};

export default Products;

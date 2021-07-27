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

const productSectionDetails = {
  step: 3,
  title: "Our Products",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  type: "dark",
};

const productItemDetails = [
  { name: "Black Hair Scissors", price: 20, img: productImg1 },
  { name: "Classic Shaving Brush", price: 25, img: productImg2 },
  { name: "Classic Stright Razor", price: 35, img: productImg3 },
  { name: "Double Edge Razor", price: 20, img: productImg4 },
  { name: "Foldable Hair Comb", price: 12, img: productImg5 },
  { name: "Hair Cleaner Brush", price: 20, img: productImg6 },
  { name: "Shave Cream Cup", price: 25, img: productImg7 },
  { name: "Wooden Hair Brush", price: 25, img: productImg8 },
];

const Products = (props) => {
  return (
    <Section type={"light"}>
      <SectionDetails details={productSectionDetails} />
      <ProductGroup items={productItemDetails} />
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

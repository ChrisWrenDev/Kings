import ServicesBlock from "./ServicesBlock";
import classes from "./ServicesGroups.module.css";
import servicesIcon1 from "../../assets/Service_Hair_Icon.svg";
import servicesIcon2 from "../../assets/Service_Beard_Icon.svg";
import servicesIcon3 from "../../assets/Service_Both_Icon.svg";

const ServicesGroup = function (props) {
  const servicesIcons = [servicesIcon1, servicesIcon2, servicesIcon3];
  const serviceGroups = [
    [
      {
        group: "hair",
        id: 1,
        name: "Classic Haircut",
        price: "25",
        description: "Classic Haircut for Men and Kids",
      },
      {
        group: "hair",
        id: 2,
        name: "Deluxe Haircut",
        price: "25",
        description: "Deluxe Haircut for Gentlement",
      },
      {
        group: "hair",
        id: 3,
        name: "Buzz Haircut",
        price: "25",
        description: "Buzz Haircut for Men and Kids",
      },
      {
        group: "hair",
        id: 4,
        name: "Kids Haircut",
        price: "25",
        description: "Kids Haircut Aged 10 or Younger",
      },
    ],
    [
      {
        group: "beard",
        id: 1,
        name: "Beard Trim",
        price: "25",
        description: "Keep Your Beard in Shape",
      },
      {
        group: "beard",
        id: 2,
        name: "Hot Towel Shave",
        price: "25",
        description: "Hot Towel Shave with Therapy",
      },
      {
        group: "beard",
        id: 3,
        name: "Beard Razor Trim",
        price: "25",
        description: "Old Fashioned Razor Shave",
      },
      {
        group: "beard",
        id: 4,
        name: "Mustache Trim",
        price: "25",
        description: "Keep You Moustache in Shape",
      },
    ],
    [
      {
        group: "other",
        id: 1,
        name: "Hair Colour",
        price: "25",
        description: "Classic Hair Colour with Brush",
      },
      {
        group: "other",
        id: 2,
        name: "Face Facial",
        price: "25",
        description: "Facial and Hot Towel Treatment",
      },
      {
        group: "other",
        id: 3,
        name: "Neck Trim",
        price: "25",
        description: "Back Neck Hair Trim with Razor",
      },
      {
        group: "other",
        id: 4,
        name: "Hair Wash",
        price: "25",
        description: "Shampoo and Hot Towel",
      },
    ],
  ];

  return (
    <div className={classes.services__group}>
      {serviceGroups.map((servicesList, index) => (
        <ServicesBlock
          id={index + 1}
          icon={servicesIcons[index]}
          services={servicesList}
        />
      ))}
    </div>
  );
};

export default ServicesGroup;

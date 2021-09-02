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
        id: "s1",
        name: "Classic Haircut",
        price: "25",
        description: "Classic Haircut for Men and Kids",
        type: "services",
      },
      {
        group: "hair",
        id: "s2",
        name: "Deluxe Haircut",
        price: "25",
        description: "Deluxe Haircut for Gentlement",
        type: "services",
      },
      {
        group: "hair",
        id: "s3",
        name: "Buzz Haircut",
        price: "25",
        description: "Buzz Haircut for Men and Kids",
        type: "services",
      },
      {
        group: "hair",
        id: "s4",
        name: "Kids Haircut",
        price: "25",
        description: "Kids Haircut Aged 10 or Younger",
        type: "services",
      },
    ],
    [
      {
        group: "beard",
        id: "s5",
        name: "Beard Trim",
        price: "25",
        description: "Keep Your Beard in Shape",
        type: "services",
      },
      {
        group: "beard",
        id: "s6",
        name: "Hot Towel Shave",
        price: "25",
        description: "Hot Towel Shave with Therapy",
        type: "services",
      },
      {
        group: "beard",
        id: "s7",
        name: "Beard Razor Trim",
        price: "25",
        description: "Old Fashioned Razor Shave",
        type: "services",
      },
      {
        group: "beard",
        id: "s8",
        name: "Mustache Trim",
        price: "25",
        description: "Keep You Moustache in Shape",
        type: "services",
      },
    ],
    [
      {
        group: "other",
        id: "s9",
        name: "Hair Colour",
        price: "25",
        description: "Classic Hair Colour with Brush",
        type: "services",
      },
      {
        group: "other",
        id: "s10",
        name: "Face Facial",
        price: "25",
        description: "Facial and Hot Towel Treatment",
        type: "services",
      },
      {
        group: "other",
        id: "s11",
        name: "Neck Trim",
        price: "25",
        description: "Back Neck Hair Trim with Razor",
        type: "services",
      },
      {
        group: "other",
        id: "s12",
        name: "Hair Wash",
        price: "25",
        description: "Shampoo and Hot Towel",
        type: "services",
      },
    ],
  ];

  return (
    <div className={classes.services__group}>
      {serviceGroups.map((servicesList, index) => (
        <ServicesBlock
          key={index + 1}
          icon={servicesIcons[index]}
          services={servicesList}
        />
      ))}
    </div>
  );
};

export default ServicesGroup;

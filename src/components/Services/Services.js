import Section from "../UI/Section";
import backgroundImg from "../../assets/global-background.jpg";
import SectionDetails from "../UI/SectionDetails";
import ServicesGroups from "./ServicesGroups";

const Services = () => {
  const serviceDetails = {
    step: 1,
    title: "Choose Your Services",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    type: "light",
  };

  return (
    <Section
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <SectionDetails details={serviceDetails} />
      <ServicesGroups />
    </Section>
  );
};

export default Services;

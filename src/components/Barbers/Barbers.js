import Section from "../UI/Section";
import SectionDetails from "../UI/SectionDetails";
import ProfileGroup from "./ProfileGroup";
import profileImg1 from "../../assets/barber_1.jpg";
import profileImg2 from "../../assets/barber_2.jpg";
import profileImg3 from "../../assets/barber_3.jpg";
import profileImg4 from "../../assets/barber_4.jpg";

const Barbers = () => {
  const barberDetails = {
    step: 2,
    title: "Our Barbers",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    type: "dark",
  };

  const barberProfiles = [
    { name: "Charles Smith", position: "- Barber -", img: profileImg1 },
    { name: "Freddie Morris", position: "- Stylist -", img: profileImg2 },
    { name: "Ryan Houghton", position: "- Barber -", img: profileImg3 },
    { name: "Andrew Harper", position: "- Stylist -", img: profileImg4 },
  ];

  return (
    <Section type={"dark"}>
      <SectionDetails details={barberDetails} />
      <ProfileGroup details={barberProfiles} />
    </Section>
  );
};

export default Barbers;

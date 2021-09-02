import Section from "../UI/Section";
import SectionDetails from "../UI/SectionDetails";
import ProfileGroup from "./ProfileGroup";
import AppointmentButton from "../Header/AppointmentButton";
import ButtonContainer from "../UI/ButtonContainer";
import profileImg1 from "../../assets/barber_1.jpg";
import profileImg2 from "../../assets/barber_2.jpg";
import profileImg3 from "../../assets/barber_3.jpg";
import profileImg4 from "../../assets/barber_4.jpg";

const Barbers = (props) => {
  const barberDetails = {
    step: 2,
    title: "Our Barbers",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    type: "dark",
  };

  const barberProfiles = [
    {
      id: "b1",
      name: "Charles Smith",
      position: "- Barber -",
      img: profileImg1,
    },
    {
      id: "b2",
      name: "Freddie Morris",
      position: "- Stylist -",
      img: profileImg2,
    },
    {
      id: "b3",
      name: "Ryan Houghton",
      position: "- Barber -",
      img: profileImg3,
    },
    {
      id: "b4",
      name: "Andrew Harper",
      position: "- Stylist -",
      img: profileImg4,
    },
  ];

  return (
    <Section type={"dark"}>
      <SectionDetails details={barberDetails} />
      <ProfileGroup details={barberProfiles} />
      <ButtonContainer>
        <AppointmentButton
          callToAction="Make An Appointment"
          onShowAppointment={props.onShowAppointment}
        />
      </ButtonContainer>
    </Section>
  );
};

export default Barbers;

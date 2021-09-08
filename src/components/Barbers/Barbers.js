import { useState, useEffect } from "react";
import Section from "../UI/Section";
import SectionDetails from "../UI/SectionDetails";
import ProfileGroup from "./ProfileGroup";
import AppointmentButton from "../Header/AppointmentButton";
import ButtonContainer from "../UI/ButtonContainer";
import profileImg1 from "../../assets/barber_1.jpg";
import profileImg2 from "../../assets/barber_2.jpg";
import profileImg3 from "../../assets/barber_3.jpg";
import profileImg4 from "../../assets/barber_4.jpg";
import useHttp from "../../hooks/use-http";
import { ItemsContext } from "../../store/items-context";

const Barbers = (props) => {
  const [loadBarbers, setLoadBarbers] = useState(false);

  const { itemsState, itemsDispatch } = ItemsContext();

  const { loadingStatus, error, httpRequest } = useHttp();

  useEffect(() => {
    const transformData = (barbers) => {
      if (loadBarbers) return;

      const profileImages = [
        profileImg1,
        profileImg2,
        profileImg3,
        profileImg4,
      ];

      const barberProfiles = [];

      let index = 0;
      for (const id in barbers) {
        barberProfiles.push({
          id: id,
          name: barbers[id].name,
          position: barbers[id].position,
          img: profileImages[index],
          status: false,
        });
        index++;
      }

      itemsDispatch({
        type: "ADD_ITEMS",
        items: barberProfiles,
        group: "barbers",
      });
    };

    httpRequest(
      {
        url: "https://kings-barbers-85e2a-default-rtdb.europe-west1.firebasedatabase.app/barbers.json",
      },
      transformData
    );

    setLoadBarbers(true);
  }, [httpRequest, loadBarbers, itemsDispatch]);

  const barberDetails = {
    step: 2,
    title: "Our Barbers",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    type: "dark",
  };

  return (
    <Section type={"dark"}>
      <SectionDetails details={barberDetails} />
      {!loadingStatus && !error && (
        <ProfileGroup details={itemsState.barbers} />
      )}
      {loadingStatus && <p>Loading...</p>}
      {error && <p>{error}</p>}
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

import Section from "../UI/Section";
import SectionDetails from "../UI/SectionDetails";
import AppointmentForm from "./AppointmentForm";
import AppointmentDetails from "./AppointmentDetails";

const appointmentDetails = {
  step: 0,
  title: "Make an Appointment",
  description:
    "Founded in 1948, Macho Barber Shop is the Authority in Men’s Grooming. We cater to men who are looking for an elevated barber shop experience.",
  type: "dark",
};

const Appointment = function () {
  return (
    <Section type={"light"}>
      <SectionDetails details={appointmentDetails} />
      <AppointmentDetails />
      <AppointmentForm />
    </Section>
  );
};

export default Appointment;

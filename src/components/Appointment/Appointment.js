import Section from "../UI/Section";
import SectionDetails from "../UI/SectionDetails";
import AppointmentForm from "./AppointmentForm";
import AppointmentDetails from "./AppointmentDetails";
import classes from "./Appointment.module.css";

const appointmentDetails = {
  step: 0,
  title: "Make an Appointment",
  description:
    "Founded in 1948, Macho Barber Shop is the Authority in Men’s Grooming. We cater to men who are looking for an elevated barber shop experience.",
  type: "dark",
};

const Appointment = function (props) {
  return (
    <Section type={"light"} className={classes.appointment}>
      <div className={classes.appointment__content}>
        <div
          onClick={props.onCloseAppointment}
          className={classes.appointment__close}
        >
          &#10006;
        </div>
        <SectionDetails details={appointmentDetails} />
        <AppointmentDetails />
        <AppointmentForm onCloseAppointment={props.onCloseAppointment} />
      </div>
    </Section>
  );
};

export default Appointment;

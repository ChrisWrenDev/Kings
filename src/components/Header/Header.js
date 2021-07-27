import Logo from "../../assets/Kings_Barber_Shop_Logo.svg";
import Navigation from "./Navigation";
import AppointmentCounter from "./AppointmentCounter";
import AppointmentButton from "./AppointmentButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src={Logo} alt="Macho Logo" className={classes.header__logo} />
      <Navigation />
      <div className={classes.header__booking}>
        <AppointmentCounter />
        <AppointmentButton
          callToAction="Book Appointment"
          onShowAppointment={props.onShowAppointment}
        />
      </div>
    </header>
  );
};

export default Header;

import classes from "./Footer.module.css";
import logo from "../../assets/Kings_Barber_Shop_Logo.svg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footer__address}>
        848 28th st, Brooklyn
        <br />
        New York, United States
      </p>
      <img className={classes.footer__logo} src={logo} alt="Kings Logo" />
      <p className={classes.footer__openHours}>
        Mon - Sat: 7:00AM -8:00PM
        <br />
        Sunday: <span>Closed</span>
      </p>
    </footer>
  );
};

export default Footer;

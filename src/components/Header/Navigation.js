import classes from "./Navigation.module.css";

const Navigation = function () {
  return (
    <ul className={classes.navigation}>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#gallery">Gallery</a>
      </li>
      <li>
        <a href="#footer">Contact</a>
      </li>
    </ul>
  );
};

export default Navigation;

import classes from "./Navigation.module.css";

const Navigation = function () {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.navigation__list}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

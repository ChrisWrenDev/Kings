import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Barbers from "./components/Barbers/Barbers";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Barbers />
    </Fragment>
  );
}

export default App;

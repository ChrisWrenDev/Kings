import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Barbers from "./components/Barbers/Barbers";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Barbers />
      <Products />
      <Testimonials />
      <Gallery />
      <Footer />
    </Fragment>
  );
}

export default App;

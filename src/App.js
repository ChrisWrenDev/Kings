import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Barbers from "./components/Barbers/Barbers";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Appointment from "./components/Appointment/Appointment";
import ItemsProvider from "./store/items-context";
import "./App.css";

function App() {
  const [appointmentVisable, setAppointmentVisable] = useState(false);

  const showAppointmentHandler = function () {
    setAppointmentVisable(true);
  };

  const hideAppointmentHandler = function () {
    setAppointmentVisable(false);
  };

  return (
    <ItemsProvider>
      <Header onShowAppointment={showAppointmentHandler} />
      <Hero />
      <About />
      <Services />
      <Barbers onShowAppointment={showAppointmentHandler} />
      <Products onShowAppointment={showAppointmentHandler} />
      <Testimonials />
      <Gallery />
      <Footer />
      {appointmentVisable && (
        <Appointment onCloseAppointment={hideAppointmentHandler} />
      )}
    </ItemsProvider>
  );
}

export default App;

import React from "react";

const AppointmentContext = React.createContext({
  services: [],
  barbers: [],
  products: [],
  addItem: () => {},
  removeItem: () => {},
  clearItems: () => {},
});

export default AppointmentContext;

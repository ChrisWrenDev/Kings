import React from "react";

const AppointmentContext = React.createContext({
  services: [],
  barbers: [],
  products: [],
  addItems: () => {},
  clearItems: () => {},
  updateItemStatus: () => {},
});

export default AppointmentContext;

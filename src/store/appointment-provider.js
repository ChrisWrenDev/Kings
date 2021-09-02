import { useReducer } from "react";
import AppointmentContext from "./appointment-context";

const defaultAppointmentState = {
  services: [],
  barbers: [],
  products: [],
};

const apppointmentReducer = (state, action) => {
  if (action.type === "ADD") {
    const type = action.item.type;

    const updatedItems = state[type].concat(action.item);

    return {
      ...state,
      [`${type}`]: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    const type = action.item.type;
    console.log(type);
    const updatedItems = state[type].filter(
      (item) => item.id !== action.item.id
    );

    return {
      ...state,
      [`${type}`]: updatedItems,
    };
  }

  if (action.type === "CLEAR") {
    return defaultAppointmentState;
  }

  return defaultAppointmentState;
};

const AppointmentProvider = (props) => {
  const [appointmentState, appointmentDispatch] = useReducer(
    apppointmentReducer,
    defaultAppointmentState
  );

  const addItemHandler = (item) => {
    appointmentDispatch({ type: "ADD", item: item });
  };
  const removeItemHandler = (item) => {
    appointmentDispatch({ type: "REMOVE", item: item });
  };
  const clearItemsHandler = () => {
    appointmentDispatch({ type: "CLEAR" });
  };

  const appointmentCtx = {
    services: appointmentState.services,
    barbers: appointmentState.barbers,
    products: appointmentState.products,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearItems: clearItemsHandler,
  };

  return (
    <AppointmentContext.Provider value={appointmentCtx}>
      {props.children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentProvider;

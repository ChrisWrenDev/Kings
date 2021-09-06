import { useReducer } from "react";
import AppointmentContext from "./appointment-context";

const defaultAppointmentState = {
  services: [],
  barbers: [],
  products: [],
};

const apppointmentReducer = (state, action) => {
  if (action.type === "ADD") {
    const type = action.group;

    return {
      ...state,
      [`${type}`]: action.items,
    };
  }

  if (action.type === "UPDATE") {
    const updatedItems = [...state[action.group]];
    const itemIndex = updatedItems.indexOf(action.item);
    updatedItems[itemIndex].status = !updatedItems[itemIndex].status;

    return {
      ...state,
      [`${action.item.group}`]: updatedItems,
    };
  }

  // if (action.type === "REMOVE") {
  //   const type = action.item.type;
  //   console.log(type);
  //   const updatedItems = state[type].filter(
  //     (item) => item.id !== action.item.id
  //   );

  //   return {
  //     ...state,
  //     [`${type}`]: updatedItems,
  //   };
  // }

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

  const addItemsHandler = (items, group) => {
    appointmentDispatch({ type: "ADD", items, group });
  };

  const clearItemsHandler = () => {
    appointmentDispatch({ type: "CLEAR" });
  };

  const updateItemStatusHandler = (item, group) => {
    appointmentDispatch({ type: "UPDATE", item, group });
  };

  const appointmentCtx = {
    services: appointmentState.services,
    barbers: appointmentState.barbers,
    products: appointmentState.products,
    addItems: addItemsHandler,
    clearItems: clearItemsHandler,
    updateItemStatus: updateItemStatusHandler,
  };

  return (
    <AppointmentContext.Provider value={appointmentCtx}>
      {props.children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentProvider;

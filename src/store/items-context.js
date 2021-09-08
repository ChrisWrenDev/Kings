import { createContext, useContext, useReducer } from "react";
import { itemsReducer } from "./items-reducers";

const Items = createContext();

const ItemsProvider = (props) => {
  const [itemsState, itemsDispatch] = useReducer(itemsReducer, {
    services: [],
    barbers: [],
    products: [],
    appointment: [],
  });

  return (
    <Items.Provider value={{ itemsState, itemsDispatch }}>
      {props.children}
    </Items.Provider>
  );
};

export const ItemsContext = () => {
  return useContext(Items);
};

export default ItemsProvider;

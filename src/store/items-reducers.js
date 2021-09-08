export const itemsReducer = (state, action) => {
  if (action.type === "ADD_ITEMS") {
    return {
      ...state,
      [`${action.group}`]: action.items,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state[action.group]];
    const itemIndex = updatedItems.indexOf(action.item);
    updatedItems[itemIndex].status = !updatedItems[itemIndex].status;

    return {
      ...state,
      [`${action.item.group}`]: updatedItems,
    };
  }

  if (action.type === "CLEAR_ITEMS") {
    return { ...state, appointment: [] };
  }

  return state;
};

// const clearItemsHandler = () => {
//   appointmentDispatch({ type: "CLEAR" });
// };

// const updateItemStatusHandler = (item, group) => {
//   appointmentDispatch({ type: "UPDATE", item, group });
// };

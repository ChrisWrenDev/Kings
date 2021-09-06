import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = function (state, action) {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return initialInputState;
  }
  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, inputDispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = function (event) {
    inputDispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = function (event) {
    inputDispatch({ type: "BLUR" });
  };

  const reset = function () {
    inputDispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError: hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

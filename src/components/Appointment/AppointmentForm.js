import classes from "./AppointmentForm.module.css";
import FormInput from "./FormInput";
import useInput from "./../../hooks/use-input";

const isFullName = (value) => value.trim().includes(" ");
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isPhoneNumber = (value) => {
  return true;
}; //value.match(/\d/g).length === 10
const isDate = (value) => {
  return true;
};

const AppointmentForm = function (props) {
  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullName,
  } = useInput(isFullName);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: phoneNumberValue,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useInput(isPhoneNumber);

  const {
    value: dateValue,
    isValid: dateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDate,
  } = useInput(isDate);

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    fullNameIsValid &&
    emailIsValid &&
    phoneNumberIsValid &&
    dateIsValid &&
    messageIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(
      fullNameValue,
      emailValue,
      phoneNumberValue,
      dateValue,
      messageValue
    );

    resetFullName();
    resetEmail();
    resetPhoneNumber();
    resetDate();
    resetMessage();
  };

  return (
    <div>
      <h3 className={classes["appointment-form__title"]}>Details</h3>
      <form
        onSubmit={submitHandler}
        className={classes["appointment-form__fields"]}
      >
        <FormInput
          type={"text"}
          name="Full Name"
          required={true}
          onChange={fullNameChangeHandler}
          onBlur={fullNameBlurHandler}
          value={fullNameValue}
          error={fullNameHasError}
          errorMsg={"Please enter your full name"}
        />
        <FormInput
          type={"email"}
          name="Email Address"
          required={true}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
          error={emailHasError}
          errorMsg={"Please enter a valid email address"}
        />
        <FormInput
          type={"number"}
          name="Phone Number"
          required={true}
          onChange={phoneNumberChangeHandler}
          onBlur={phoneNumberBlurHandler}
          value={phoneNumberValue}
          error={phoneNumberHasError}
          errorMsg={"Please enter a valid 10 digit phone number"}
        />
        <FormInput
          type={"date"}
          name="Appointment Date"
          required={true}
          onChange={dateChangeHandler}
          onBlur={dateBlurHandler}
          value={dateValue}
          error={dateHasError}
          errorMsg={"Date occurs in the past"}
        />
        <FormInput
          type={"textarea"}
          name="Your message..."
          onChange={messageChangeHandler}
          onBlur={messageBlurHandler}
          value={messageValue}
          error={messageHasError}
          errorMsg={"Please write a short message"}
        />
        <button
          className={classes["appointment-form__closeBtn"]}
          onClick={props.onCloseAppointment}
        >
          Close
        </button>
        <button
          className={classes["appointment-form__submitBtn"]}
          disabled={!formIsValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;

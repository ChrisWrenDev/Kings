import classes from "./AppointmentForm.module.css";
import FormInput from "./FormInput";

const AppointmentForm = function (props) {
  return (
    <div>
      <h3 className={classes["appointment-form__title"]}>Details</h3>
      <form className={classes["appointment-form__fields"]}>
        <FormInput
          className={classes["appointment-form__input"]}
          type={"text"}
          name="Full Name"
          required={true}
        />
        <FormInput
          className={classes["appointment-form__input"]}
          type={"email"}
          name="Email Address"
          required={true}
        />
        <FormInput
          className={classes["appointment-form__input"]}
          type={"number"}
          name="Phone Number"
          required={true}
        />
        <FormInput
          className={classes["appointment-form__input"]}
          type={"date"}
          name="Appointment Date"
          required={true}
        />
        <FormInput
          className={classes["appointment-form__textarea"]}
          type={"textarea"}
          name="Your message..."
        />
      </form>
    </div>
  );
};

export default AppointmentForm;

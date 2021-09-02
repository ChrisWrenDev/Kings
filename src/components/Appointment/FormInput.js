import classes from "./FormInput.module.css";

const FormInput = function (props) {
  const inputClassList = `${classes.form__input} ${props.className}`;

  return (
    <div>
      <input
        type={props.type}
        id={props.name}
        placeholder={props.name}
        className={inputClassList}
        required
      />
      <label className={classes.form__label} htmlFor={props.name}>
        {props.name}
      </label>
    </div>
  );
};

export default FormInput;

import classes from "./FormInput.module.css";

const FormInput = function (props) {
  const containerClasses =
    props.type === "textarea" ? classes.form__textarea : "";
  const inputClassList = `${classes.form__input} ${props.className}`;
  return (
    <div className={containerClasses}>
      <label className={classes.form__label} htmlFor={props.name}>
        {props.name}
      </label>
      <input
        type={props.type}
        id={props.name}
        placeholder={props.name}
        className={inputClassList}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        required
      />
      <p>{props.error && props.errorMsg}</p>
    </div>
  );
};

export default FormInput;

import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.Input}>
      <label className={classes.label} htmlFor={props.input.id}>
        {props.label}
      </label>
      <input className={classes.inputinput} ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

import { forwardRef } from "react";

const FormInput = forwardRef(
  ({ handleChange, isPassword, isLabel, label, ...otherProps }, ref) => {
    let jsx = "";
    if (isPassword) {
      // For the login password
      jsx = <span className="show_input">show</span>;
    } else if (isLabel) {
      // Filter pop_up
      jsx = <label>{label}</label>;
    } else {
      jsx = "";
    }

    return (
      <>
        {jsx}
        <input onChange={handleChange} {...otherProps} ref={ref} />
      </>
    );
  }
);
export default FormInput;

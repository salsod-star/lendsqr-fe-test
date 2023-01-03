import { forwardRef } from "react";

const FormInput = forwardRef(
  (
    {
      handleChange,
      setPwdShow,
      pwdShow,
      isPassword,
      isLabel,
      label,
      ...otherProps
    },
    ref
  ) => {
    const handleShowPwd = () => {
      setPwdShow((prev) => {
        return {
          ...prev,
          show: !prev.show,
          text: pwdShow.text === "show" ? "hide" : "show",
        };
      });
    };

    let jsx = "";
    if (isPassword) {
      // For the login password
      jsx = (
        <span className="show_input" onClick={handleShowPwd}>
          {pwdShow.text}
        </span>
      );
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

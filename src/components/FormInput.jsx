const FormInput = ({
  handleChange,
  isPassword,
  isLabel,
  label,
  ...otherProps
}) => {
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
      <input onChange={handleChange} {...otherProps} />
    </>
  );
};

export default FormInput;

import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import Button from "../../components/CustomButton";

import logo from "../../asset/logo.svg";
import pabloLoginImage from "../../asset/pablo-sign-in.svg";

function LoginForm() {
  const [formEntries, setFormEntries] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormEntries((prev) => ({
      ...prev,
      [e.target["name"]]: e.target.value,
    }));
  };

  return (
    <div className="login_container">
      <div className="login_image">
        <div className="logo_box">
          <img src={logo} alt="logo" />
        </div>

        <div className="login_image_pablo_box">
          <img
            src={pabloLoginImage}
            className="login_image_pablo"
            alt="login illustration"
          />
        </div>
      </div>
      <div className="login_form">
        <h2 className="title">Welcome!</h2>
        <p>Enter details to login.</p>
        <form>
          <FormInput
            type="email"
            name="email"
            handleChange={handleChange}
            placeholder="Email"
            className="login_form_input"
          />
          <FormInput
            type="password"
            name="password"
            handleChange={handleChange}
            placeholder="Password"
            isPassword={true}
            className="login_form_input login_form_input--password"
          />
          <span className="forgot_password">Forgot PASSWORD?</span>
          <Button type="submit" className="submit_btn btn">
            {"Log in".toUpperCase()}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

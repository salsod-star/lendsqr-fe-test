import React, { useRef, useState, useContext, useEffect } from "react";
import { useNavigate, Form } from "react-router-dom";

import FormInput from "../../components/CustomElements/FormInput";
import Button from "../../components/CustomElements/CustomButton";

import logo from "../../asset/logo.svg";
import pabloLoginImage from "../../asset/pablo-sign-in.svg";
import axios from "../../api/axios";
import AuthContext, { validateUser } from "../../Auth/AuthProvider";

function LoginForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const [pwdShow, setPwdShow] = useState({
    show: false,
    text: "SHOW",
  });

  const userRef = useRef(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currUser = validateUser(auth.users, formEntries.email);

    if (currUser) {
      setAuth((prev) => ({ ...prev, currentUser: currUser }));
      navigate("/dashboard");

      localStorage.setItem("currentUser", String(auth.users));
      localStorage.setItem("currentUser", String(currUser));
    } else {
      console.log("Incorrect password/email");
    }
  };

  useEffect(() => {
    userRef.current.focus();
    async function getAllUsers() {
      try {
        const response = await axios.get("/users");
        setAuth({
          users: response.data,
        });
      } catch (error) {
        return;
      }
    }

    getAllUsers();
  }, [setAuth]);

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
        <Form onSubmit={handleSubmit}>
          <div>
            <FormInput
              ref={userRef}
              type="email"
              name="email"
              autoComplete="off"
              handleChange={handleChange}
              value={formEntries.email}
              placeholder="Email"
              required
              className="login_form_input"
            />
          </div>
          <div>
            <FormInput
              type={pwdShow.show ? "text" : "password"}
              name="password"
              handleChange={handleChange}
              value={formEntries.password}
              placeholder="Password"
              isPassword={true}
              setPwdShow={setPwdShow}
              pwdShow={pwdShow}
              required
              className="login_form_input login_form_input--password"
            />
          </div>
          <span className="forgot_password">Forgot PASSWORD?</span>
          <Button type="submit" className="submit_btn btn">
            {"Log in".toUpperCase()}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;

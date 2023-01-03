import React from "react";

import FormInput from "./FormInput";
import Button from "./CustomButton";

import logo from "../asset/logo.svg";
import searchIcon from "../asset/search-icon.svg";
import bellIcon from "../asset/bell-icon.svg";
import dropDown from "../asset/profile-drop-down.svg";

function Header({ user }) {
  const {
    profile: { firstName, avatar },
  } = user;

  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={logo} alt="logo" />
      </a>
      <form className="header__search-box">
        <FormInput
          type="search"
          name="search"
          className="header__search-input"
          placeholder="Search for anything"
        />
        <Button type="submit" className="header__search-btn">
          <img src={searchIcon} alt="search icon" />
        </Button>
      </form>
      <a href="/" className="doc">
        Docs
      </a>
      <div className="header__user">
        <div className="header__user-icon">
          <img src={bellIcon} alt="notification icon" />
        </div>
        <img src={avatar} alt="user profile" className="header__user-image" />
        <div className="header__user-name">
          <p>{firstName}</p>
          <img src={dropDown} alt="drop down" />
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import FormInput from "./CustomElements/FormInput";
import Button from "./CustomElements/CustomButton";

import logo from "../asset/logo.svg";
import searchIcon from "../asset/search-icon.svg";
import bellIcon from "../asset/bell-icon.svg";
import dropDown from "../asset/profile-drop-down.svg";

function Header({ user }) {
  const [show, setShow] = useState({
    screenWidth: window.innerWidth,
    continue: false,
  });
  const {
    profile: { firstName, avatar },
  } = user;

  useEffect(() => {
    function getScreenWidth(e) {
      setShow((prev) => ({ ...prev, screenWidth: e.target.innerWidth }));
    }
    window.addEventListener("resize", getScreenWidth);

    return () => {
      window.removeEventListener("resize", getScreenWidth);
    };
  }, [show.screenWidth]);

  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={logo} alt="logo" />
      </a>
      <form className="header__search-box desktop">
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
      {show.screenWidth > 980 ? (
        <div className="header__user">
          <div>
            <a href="/" className="doc">
              Docs
            </a>
            <div className="header__user-icon">
              <img src={bellIcon} alt="notification icon" />
            </div>
            <img
              src={avatar}
              alt="user profile"
              className="header__user-image"
            />
            <div className="header__user-name">
              <p>{firstName}</p>
              <img src={dropDown} alt="drop down" />
            </div>
          </div>
          <form className="header__search-box mobile">
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
        </div>
      ) : show.screenWidth < 980 && show.continue ? (
        <div className="header__user">
          <div>
            <a href="/" className="doc">
              Docs
            </a>
            <div className="header__user-icon">
              <img src={bellIcon} alt="notification icon" />
            </div>
            <img
              src={avatar}
              alt="user profile"
              className="header__user-image"
            />
            <div className="header__user-name">
              <p>{firstName}</p>
              <img src={dropDown} alt="drop down" />
            </div>
          </div>
          <form className="header__search-box mobile">
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
        </div>
      ) : (
        ""
      )}
      <HiOutlineMenuAlt3
        className="hamburger_menu"
        onClick={() =>
          setShow((prev) => ({ ...prev, continue: !prev.continue }))
        }
      />
    </header>
  );
}

export default Header;

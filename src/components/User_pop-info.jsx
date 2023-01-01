import React from "react";
import eyeViewIcon from "../asset/eye-view.svg";
import blacklistIcon from "../asset/blacklist-user-icon.svg";
import activateUserIcon from "../asset/activate-user-icon.svg";

function UserPopupInfo({ ...otherProps }) {
  return (
    <div className="user_info_popup" {...otherProps}>
      <div>
        <img src={eyeViewIcon} alt="view details" /> <p>View Details</p>
      </div>
      <div>
        <img src={blacklistIcon} alt="Blacklist User" /> <p>Blacklist User</p>
      </div>
      <div>
        <img src={activateUserIcon} alt="Activate User" /> <p>Activate User</p>
      </div>
    </div>
  );
}

export default UserPopupInfo;

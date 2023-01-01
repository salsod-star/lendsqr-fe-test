import React from "react";

import prevPage from "../../asset/prevPageArrow.svg";
import UserDetailOverview from "./UserDetailOverview";
import UserDetailHeader from "./UserDetailHeader";
import UserInfo from "./UserInfo";

function UserDetail() {
  return (
    <div className="user_detail">
      <span className="nav">
        <img src={prevPage} alt="back to previous page" /> Back to Users
      </span>
      <UserDetailHeader />
      <div className="scroll_overflow">
        <UserDetailOverview />
      </div>
      <UserInfo />
    </div>
  );
}

export default UserDetail;

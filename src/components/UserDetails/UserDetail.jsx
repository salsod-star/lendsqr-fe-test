import React, { useContext } from "react";

import prevPage from "../../asset/prevPageArrow.svg";
import UserDetailOverview from "./UserDetailOverview";
import UserDetailHeader from "./UserDetailHeader";
import UserInfo from "./UserInfo";
import AuthContext from "../../Auth/AuthProvider";

function UserDetail({ setSwap }) {
  const { auth } = useContext(AuthContext);
  const user = auth.userInfo;

  return (
    <div className="users user_detail">
      <span className="nav" onClick={() => setSwap(true)}>
        <img src={prevPage} alt="back to previous page" /> Back to Users
      </span>
      <UserDetailHeader />
      <div className="scroll_overflow">
        <UserDetailOverview user={user} />
      </div>
      <UserInfo user={user} />
    </div>
  );
}

export default UserDetail;

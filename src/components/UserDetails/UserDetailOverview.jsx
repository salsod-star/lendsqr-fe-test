import React from "react";

import avatar from "../../asset/avatar.svg";
import star from "../../asset/star.svg";

const UserDetailOverviewTop = ({ user }) => {
  return (
    <div className="user_detail_overview_top">
      <div className="avatar_container">
        <div
          className="avatar_logo_placeholder"
          style={user.profile.avatar ? { background: "none" } : ""}
        >
          <img
            src={user.profile.avatar || avatar}
            className={user.profile.avatar ? "userImage" : ""}
            alt="avatar"
          />
        </div>
        <div className="avatar_name">
          <span>
            {user.profile.firstName} {user.profile.lastName}
          </span>
          <span>{user.accountNumber}</span>
        </div>
      </div>
      <div className="user_tier">
        <span>User's Tier</span>
        <span className="user_tier_level">
          <img src={star} alt="tier level star" />
          <img src={star} alt="tier level star" />
          <img src={star} alt="tier level star" />
        </span>
      </div>
      <div className="user_bank_detail_overview">
        <span>₦{user.accountBalance}</span>
        <span>{user.profile.bvn}/Providus Bank</span>
      </div>
    </div>
  );
};

const UserDetailOverviewBottom = () => {
  return (
    <div className="user_detail_overview_bottom">
      <span className="active">General&nbsp;Details</span>
      <span>Documents</span>
      <span>Bank&nbsp;Details</span>
      <span>Loans</span>
      <span>Savings</span>
      <span>App&nbsp;and&nbsp;System</span>
    </div>
  );
};

function UserDetailOverview({ user }) {
  return (
    <div className="user_detail_overview">
      <UserDetailOverviewTop user={user} />
      <UserDetailOverviewBottom />
    </div>
  );
}

export default UserDetailOverview;

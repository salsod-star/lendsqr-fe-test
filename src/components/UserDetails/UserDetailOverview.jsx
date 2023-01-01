import React from "react";

import avatar from "../../asset/avatar.svg";
import star from "../../asset/star.svg";

const UserDetailOverviewTop = () => {
  return (
    <div className="user_detail_overview_top">
      <div className="avatar_container">
        <div className="avatar_logo_placeholder">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="avatar_name">
          <span>Grace Effiom</span>
          <span>LSQFf587g90</span>
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
        <span>₦200,000.00</span>
        <span>9912345678/Providus Bank</span>
      </div>
    </div>
  );
};

const UserDetailOverviewBottom = () => {
  return (
    <div className="user_detail_overview_bottom">
      <span>General&nbsp;Details</span>
      <span>Documents</span>
      <span>Bank&nbsp;Details</span>
      <span>Loans</span>
      <span>Savings</span>
      <span>App&nbsp;and&nbsp;System</span>
    </div>
  );
};

function UserDetailOverview() {
  return (
    <div className="user_detail_overview">
      <UserDetailOverviewTop />
      <UserDetailOverviewBottom />
    </div>
  );
}

export default UserDetailOverview;

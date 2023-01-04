import React from "react";

import users from "../asset/users.svg";
import activeUsers from "../asset/active-users.svg";
import loanUser from "../asset/loan-record.svg";
import savingsUser from "../asset/savings-icon.svg";

function UserOverview() {
  return (
    <div className="users__overview-container">
      <div className="users__overview">
        <div className="users__overview-card">
          <span>
            <img src={users} alt="icon" />
          </span>
          <p>users</p>
          <p>2,453</p>
        </div>
        <div className="users__overview-card">
          <span>
            <img src={activeUsers} alt="icon" />
          </span>
          <p>active users</p>
          <p>12,453</p>
        </div>
        <div className="users__overview-card">
          <span>
            <img src={loanUser} alt="icon" />
          </span>
          <p>users with loans</p>
          <p>2,453</p>
        </div>
        <div className="users__overview-card">
          <span>
            <img src={savingsUser} alt="icon" />
          </span>
          <p>users with savings</p>
          <p>102,453</p>
        </div>
      </div>
    </div>
  );
}

export default UserOverview;

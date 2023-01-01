import React from "react";

import Button from "../CustomButton";

function UserDetailHeader() {
  const buttonStyleRed = {
    border: "1px solid #E4033B",
    color: "#E4033B",
  };

  const buttonStyleGreen = {
    border: "1px solid #39CDCC",
    color: "#39CDCC",
  };

  return (
    <div className="user_detail_header">
      <h2>User Details</h2>
      <div className="buttons">
        <Button type="button" className="btn" style={buttonStyleRed}>
          Blacklist User
        </Button>
        <Button type="button" className="btn" style={buttonStyleGreen}>
          Activate User
        </Button>
      </div>
    </div>
  );
}

export default UserDetailHeader;

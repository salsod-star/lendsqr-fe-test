import React from "react";
import dots from "../asset/dots.svg";
import UserPopupInfo from "./User_pop-info";
import { parseDate } from "./DateParser";

function User({
  user,
  shouldOPen,
  setShouldOPen,
  userIndex,
  isModalOpen,
  setSwap, // from dashboard component
}) {
  const lastTwoIndex = [shouldOPen.length - 2, shouldOPen.length - 1];
  function handleUserDetailPopUp(i) {
    setShouldOPen((prev) => {
      const newState = prev.map((entry, index) =>
        index !== i ? false : !entry
      );
      return newState;
    });
  }
  let {
    orgName,
    userName,
    email,
    profile: { phoneNumber },
    createdAt,
  } = user;

  let date = parseDate(createdAt);

  let statusStyle = "";
  let status = "active";

  if (status === "Inactive") {
    statusStyle = "inactive_status";
  } else if (status === "Active") {
    statusStyle = "active_status";
  } else if (status === "Pending") {
    statusStyle = "pending_status";
  } else {
    statusStyle = "blacklist_status";
  }

  return (
    <tr className="users__table-row">
      <td>{orgName}</td>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{date}</td>
      <td>
        <span className={statusStyle}>{status}</span>
      </td>
      <td
        className="moreInfo_modal_container"
        onClick={() => handleUserDetailPopUp(userIndex)}
      >
        <img src={dots} alt="dotsIcon" />
        {isModalOpen && lastTwoIndex.includes(userIndex) ? (
          <UserPopupInfo
            user={user}
            style={{ top: "-160%" }}
            setSwap={setSwap}
          />
        ) : isModalOpen ? (
          <UserPopupInfo user={user} setSwap={setSwap} />
        ) : (
          ""
        )}
      </td>
    </tr>
  );
}

export default User;

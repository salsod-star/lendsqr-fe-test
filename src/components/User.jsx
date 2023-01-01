import React from "react";
import dots from "../asset/dots.svg";
import UserPopupInfo from "./User_pop-info";

function User({
  company,
  name,
  email,
  number,
  date,
  status,
  shouldOPen,
  setShouldOPen,
  userIndex,
  isModalOpen,
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

  let statusStyle = "";

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
      <td>{company}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{number}</td>
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
          <UserPopupInfo style={{ top: "-160%" }} />
        ) : isModalOpen ? (
          <UserPopupInfo />
        ) : (
          ""
        )}
      </td>
    </tr>
  );
}

export default User;

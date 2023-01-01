import React from "react";

import filterIcon from "../asset/button-filter.svg";

function UsersTableHeader() {
  return (
    <thead className="users__table-header">
      <tr>
        <th scope="table column" className="col column1">
          <span>organization</span>{" "}
          <img className="filterIcon" src={filterIcon} alt="filter icon" />
        </th>
        <th scope="table column" className="col column2">
          Username{" "}
          <img className="filterIcon" src={filterIcon} alt="filter icon" />
        </th>
        <th scope="table column" className="col column3">
          Email{" "}
          <img className="filterIcon" src={filterIcon} alt="filter icon" />
        </th>
        <th scope="table column" className="col column4">
          Phone number{" "}
          <img className="filterIcon" src={filterIcon} alt="filter icon" />
        </th>
        <th scope="table column" className="col column5">
          Date joined{" "}
          <img className="filterIcon" src={filterIcon} alt="filter icon" />
        </th>
        <th scope="table column" className="flex_item column6">
          Status{" "}
          <img className="filterIcon" src={filterIcon} alt="filter icon" />
        </th>
        <th scope="table column" className="flex_item column6"></th>
      </tr>
    </thead>
  );
}

export default UsersTableHeader;

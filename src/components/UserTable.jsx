import React, { useState } from "react";
import UsersTableHeader from "./UsersTableHeader";
import UsersTableMain from "./UsersTableMain";
import Pagination from "./Pagination";

let pageStart, pageEnd;

function UsersTable({ setSwap }) {
  const users = JSON.parse(localStorage.getItem("users"));

  const totalUsers = users.length;
  const [maxCount, setMaxCount] = useState(9);
  const [pageNumber, setPageNumber] = useState(1);

  const totalPageNumber = Math.ceil(totalUsers / maxCount);

  pageStart = pageNumber * maxCount - maxCount;
  pageEnd = pageStart + maxCount;

  return (
    <>
      <div className="users_wrapper">
        <table className="users__table">
          <UsersTableHeader />
          <UsersTableMain
            users={users.slice(pageStart, pageEnd)}
            setSwap={setSwap}
          />
        </table>
      </div>
      <Pagination
        setMaxCount={setMaxCount}
        totalUsers={totalUsers}
        totalPageNumber={totalPageNumber}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </>
  );
}

export default UsersTable;

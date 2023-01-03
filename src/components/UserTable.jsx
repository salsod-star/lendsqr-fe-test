import React, { useContext, useState } from "react";
import UsersTableHeader from "./UsersTableHeader";
import UsersTableMain from "./UsersTableMain";
import Pagination from "./Pagination";
import AuthContext from "../Auth/AuthProvider";

let pageStart, pageEnd;

function UsersTable({ setSwap }) {
  const { auth } = useContext(AuthContext);
  const totalUsers = auth.users.length;
  const [maxCount, setMaxCount] = useState(9);
  const [pageNumber, setPageNumber] = useState(1);

  // const [pageEnd, setPageEnd] = useState(maxCount)

  const totalPageNumber = Math.ceil(totalUsers / maxCount);

  pageStart = pageNumber * maxCount - maxCount;
  pageEnd = pageStart + maxCount;

  return (
    <>
      <div className="users_wrapper">
        <table className="users__table">
          <UsersTableHeader />
          <UsersTableMain
            users={auth.users.slice(pageStart, pageEnd)}
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

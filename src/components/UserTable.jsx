import React from "react";
import UsersTableHeader from "./UsersTableHeader";
import UsersTableMain from "./UsersTableMain";
import Pagination from "./Pagination";

function UsersTable() {
  return (
    <>
      <div className="users_wrapper">
        <table className="users__table">
          <UsersTableHeader />
          <UsersTableMain />
        </table>
      </div>
      <Pagination />
    </>
  );
}

export default UsersTable;

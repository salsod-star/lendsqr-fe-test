import React from "react";
// import UserOverview from "./userOverview";
// import UsersTable from "./UserTable";

import UserDetail from "./UserDetails/UserDetail";

function Main() {
  return (
    <div className="users">
      {/* <h2>Users</h2>
      <UserOverview />
      <UsersTable /> */}
      <UserDetail />
    </div>
  );
}

export default Main;

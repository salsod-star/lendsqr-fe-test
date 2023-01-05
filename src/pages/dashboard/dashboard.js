import React, { useState } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Main from "../../components/Main";
// import AuthContext from "../../Auth/AuthProvider";
import UserDetail from "../../components/UserDetails/UserDetail";

function Dashboard() {
  // const { auth } = useContext(AuthContext);
  const currUser = JSON.parse(localStorage.getItem("currUser"));

  const [swap, setSwap] = useState(true);

  return (
    <div className="container">
      <Header user={currUser && currUser} />
      <Sidebar />
      <div className="users_wrapper--overflow">
        {swap ? <Main setSwap={setSwap} /> : <UserDetail setSwap={setSwap} />}
      </div>
    </div>
  );
}

export default Dashboard;

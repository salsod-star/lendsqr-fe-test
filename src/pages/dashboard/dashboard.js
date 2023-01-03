import React, { useContext, useState } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Main from "../../components/Main";
import AuthContext from "../../Auth/AuthProvider";
import UserDetail from "../../components/UserDetails/UserDetail";

function Dashboard() {
  const { auth } = useContext(AuthContext);

  const [swap, setSwap] = useState(true);

  return (
    <div className="container">
      <Header user={auth.currentUser && auth.currentUser} />
      <Sidebar />
      {swap ? (
        <Main setSwap={setSwap} />
      ) : (
        <UserDetail userInfo={auth.userInfo} setSwap={setSwap} />
      )}
    </div>
  );
}

export default Dashboard;

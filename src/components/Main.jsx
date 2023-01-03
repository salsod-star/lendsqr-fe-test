import UserOverview from "./userOverview";
import UsersTable from "./UserTable";

function Main({ setSwap }) {
  return (
    <div className="users">
      <h2>Users</h2>
      <UserOverview />
      <UsersTable setSwap={setSwap} />
    </div>
  );
}

export default Main;

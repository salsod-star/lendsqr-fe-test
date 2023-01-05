import prevPage from "../../asset/prevPageArrow.svg";
import UserDetailOverview from "./UserDetailOverview";
import UserDetailHeader from "./UserDetailHeader";
import UserInfo from "./UserInfo";

function UserDetail({ setSwap }) {
  const selectedUserInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="users user_detail">
      <span className="nav" onClick={() => setSwap(true)}>
        <img src={prevPage} alt="back to previous page" /> Back to Users
      </span>
      <UserDetailHeader />
      <div className="scroll_overflow">
        <UserDetailOverview user={selectedUserInfo} />
      </div>
      <UserInfo user={selectedUserInfo} />
    </div>
  );
}

export default UserDetail;

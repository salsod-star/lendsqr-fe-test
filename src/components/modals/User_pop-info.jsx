import eyeViewIcon from "../../asset/eye-view.svg";
import blacklistIcon from "../../asset/blacklist-user-icon.svg";
import activateUserIcon from "../../asset/activate-user-icon.svg";

function getUserDetail(users, id) {
  return users.find((user) => user.id === id);
}

function UserPopupInfo({ setSwap, user, ...otherProps }) {
  const users = JSON.parse(localStorage.getItem("users"));

  const handleClick = (id) => {
    setSwap(false);

    const userInfo = getUserDetail(users, id);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  return (
    <div className="user_info_popup" {...otherProps}>
      <div onClick={() => handleClick(user.id)}>
        <img src={eyeViewIcon} alt="view details" /> <p>View Details</p>
      </div>
      <div>
        <img src={blacklistIcon} alt="Blacklist User" /> <p>Blacklist User</p>
      </div>
      <div>
        <img src={activateUserIcon} alt="Activate User" /> <p>Activate User</p>
      </div>
    </div>
  );
}

export default UserPopupInfo;

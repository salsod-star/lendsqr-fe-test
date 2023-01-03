import React, { useCallback, useState } from "react";
import User from "./User";

function UsersTableMain({ users, setSwap }) {
  const usersArrBool = useCallback(() => {
    return users.map((entry) => false);
  }, [users]);

  const [shouldOPen, setShouldOPen] = useState(usersArrBool);

  return (
    <tbody className="users__table--main">
      {users?.map((user, index) => {
        return (
          <User
            key={user.id}
            userID={user.id}
            user={user}
            isModalOpen={shouldOPen[index]}
            userIndex={index}
            setShouldOPen={setShouldOPen}
            shouldOPen={shouldOPen}
            setSwap={setSwap} // from dashboard component
          />
        );
      })}
    </tbody>
  );
}

export default UsersTableMain;

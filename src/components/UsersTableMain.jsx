import React, { useState } from "react";
import User from "./User";
import data from "./data";
function UsersTableMain() {
  const d = data();
  const arr = d.map((entry) => false);
  const [shouldOPen, setShouldOPen] = useState(arr);

  return (
    <tbody className="users__table--main">
      {d.map((user, index) => {
        return (
          <User
            key={index}
            {...user}
            isModalOpen={shouldOPen[index]}
            userIndex={index}
            setShouldOPen={setShouldOPen}
            shouldOPen={shouldOPen}
          />
        );
      })}
    </tbody>
  );
}

export default UsersTableMain;

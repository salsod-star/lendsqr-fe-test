import React from "react";

function Card({ props }) {
  const { icon, userCategory, totalNumber } = props;
  return (
    <div className="users__overview-card">
      <span>{icon}</span>
      <p>{userCategory}</p>
      <p>{totalNumber}</p>
    </div>
  );
}

export default Card;

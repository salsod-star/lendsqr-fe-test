import React from "react";
import prevArrow from "../asset/left-arrow.svg";
import nextArrow from "../asset/right-arrow.svg";
import arrDown from "../asset/drop-down.svg";

function Pagination() {
  const arrowStyle = {
    backgroundImage: `url(${arrDown})`,
    backgroundSize: "11px",
    backgroundPosition: "80% 50%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="pagination">
      <div className="pagination_quantity">
        <span>Showing</span>
        <select style={arrowStyle}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span>out of 100</span>
      </div>

      <div className="pagination_page">
        <span>
          <img src={prevArrow} alt="previous arrow" />
        </span>
        <ul>
          <li className="active_page">1</li>
          <li>2</li>
          <li>3</li>
          <li>...</li>
          <li>15</li>
          <li>16</li>
        </ul>
        <span>
          <img src={nextArrow} alt="next arrow" />
        </span>
      </div>
    </div>
  );
}

export default Pagination;

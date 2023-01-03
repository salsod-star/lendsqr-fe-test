import React from "react";
import prevArrow from "../asset/left-arrow.svg";
import nextArrow from "../asset/right-arrow.svg";
import arrDown from "../asset/drop-down.svg";

function Pagination({
  setMaxCount,
  totalUsers,
  totalPageNumber,
  setPageNumber,
  pageNumber,
}) {
  const arrowStyle = {
    backgroundImage: `url(${arrDown})`,
    backgroundSize: "11px",
    backgroundPosition: "80% 50%",
    backgroundRepeat: "no-repeat",
  };

  const pages = [];
  for (let i = 1; i <= totalPageNumber; i++) {
    pages.push(i);
  }

  const handleNextPage = () => {
    setPageNumber((prev) => {
      if (prev < totalPageNumber) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handlePrevPage = () => {
    setPageNumber((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div className="pagination">
      <div className="pagination_quantity">
        <span>Showing</span>
        <select
          style={arrowStyle}
          onChange={(e) =>
            setMaxCount(Number(e.target.value), setPageNumber(1))
          }
        >
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span>out of {totalUsers}</span>
      </div>

      <div className="pagination_page">
        <span onClick={handlePrevPage}>
          <img src={prevArrow} alt="previous arrow" />
        </span>
        <ul>
          {pages.map((number) => (
            <li
              key={number}
              style={{ cursor: "pointer" }}
              onClick={() => setPageNumber(number)}
              className={number === pageNumber ? "active_page" : ""}
            >
              {number}
            </li>
          ))}
        </ul>
        <span onClick={handleNextPage}>
          <img src={nextArrow} alt="next arrow" />
        </span>
      </div>
    </div>
  );
}

export default Pagination;

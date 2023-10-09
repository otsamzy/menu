import React from "react";

const Nav = ({ category, selectBtn }) => {
  return (
    <nav className="nav_container">
      <ul className="nav">
        {category.map((cate, index) => {
          return (
            <li
              key={index}
              className={"category"}
              onClick={() => selectBtn(cate)}
            >
              {cate}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

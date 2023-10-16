import React from "react";

const Nav = ({ category, selectBtn }) => {
const [currNumber, setCurrNumber] = useState(0); 
  return (
    <nav className="nav_container">
      <ul className="nav">
        {category.map((cate, index) => {
          return (
            <li  
             className={`${
                index === currNumber ? "category active" : "category"
              } `}
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

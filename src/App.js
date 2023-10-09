import React, { useState } from "react";
import Data from "./Components/Data";
import Menu from "./Components/Menu";
import Nav from "./Components/Nav";
import "./Components/styles.css";

const uniquekey = [
  "all",
  ...new Set(
    Data.map((keys) => {
      return keys.category;
    })
  ),
];

function App() {
  const [category, setCategory] = useState(uniquekey);
  const [menuDisplay, setMenuDisplay] = useState(Data);

  const selectFun = (category) => {
    let filtered = Data.filter((item) => {
      if (category === "all") {
        return item;
      }
      if (category === item.category) {
        return item;
      }
    });

    setMenuDisplay(filtered);
  };

  return (
    <div className="Container">
      <header>
        <h1 className="page_title">
          Our Menu
          <span className="underline"></span>
        </h1>
        <Nav category={category} selectBtn={selectFun} />
      </header>

      <Menu menu={menuDisplay} />
    </div>
  );
}

export default App;

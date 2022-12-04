import React from "react";
import SideBar from "./components/side-bar";
import ComingSoon from "./components/coming-soon";
import Menu from "./components/menu";

import "./App.css";

export default function App() {
  return (
    <div id="App">
      {process.env.NODE_ENV === "development" ? (
        <div>
          {" "}
          <SideBar /> <Menu />
        </div>
      ) : (
        <ComingSoon />
      )}
      <div id="page-wrap"></div>
    </div>
  );
}

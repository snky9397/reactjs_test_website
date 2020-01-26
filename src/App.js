import React from "react";
import SideBar from "./components/side-bar";

import "./App.css";

export default function App() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap"></div>
    </div>
  );
}

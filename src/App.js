import React from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";

const App = () => {
  return (
    <div className="App">
      <Header />

      <div style={{ backgroundColor: "gray", height: "800px" }}></div>
      <div style={{ backgroundColor: "yellow", height: "800px" }}></div>
      <div style={{ backgroundColor: "pink", height: "800px" }}></div>
      <div style={{ backgroundColor: "orange", height: "800px" }}></div>
    </div>
  );
};

export default App;

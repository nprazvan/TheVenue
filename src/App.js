import React from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import { Featured } from "./components/featured";
import VenueInfo from "./components/venueInfo/index";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";

const App = () => {
  return (
    <div className="App">
      <Header />

      <>
        <Featured />
      </>

      <>
        <VenueInfo />
      </>

      <>
        <Highlights />
      </>

      <>
        <Pricing />
      </>

      <div style={{ backgroundColor: "gray", height: "800px" }}></div>
      <div style={{ backgroundColor: "white", height: "800px" }}></div>
      <div style={{ backgroundColor: "black", height: "800px" }}></div>
      <div style={{ backgroundColor: "gray", height: "800px" }}></div>

      <Footer />
    </div>
  );
};

export default App;

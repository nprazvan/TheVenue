import React from "react";

import Carrousel from "./Carrousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Featured = () => {
  return (
    <div className="featured_container">
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Turnstile</div>
      </div>
    </div>
  );
};

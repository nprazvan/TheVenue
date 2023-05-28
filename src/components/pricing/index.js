import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";

const Pricing = () => {
  const priceState = {
    prices: [30, 40, 50],
    position: ["Balcony", "Medium", "Star"],
    desc: ["Balcony tickets", "General access tickets", "VIP tickets"],
    linkto: ["http://sales.b", "http:sales/m", "http://sales.s"],
    delay: [500, 0, 500],
  };

  const showBoxes = () =>
    priceState.prices.map((box, i) => (
      <Zoom key={i} className="pricing_item" delay={priceState.delay[i]}>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>{priceState.prices[i]}EUR</span>
            <span>{priceState.position[i]}</span>
          </div>
          <div className="pricing_description">{priceState.desc[i]}</div>
          <div className="pricing_buttons">
            <MyButton
              text="purchase"
              size="large"
              style={{ color: "#ffffff" }}
              link={priceState.linkto[i]}
            />
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;

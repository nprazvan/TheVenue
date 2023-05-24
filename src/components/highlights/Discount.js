import React, { useState, useEffect } from "react";

import { Fade, Slide } from "react-awesome-reveal";

const Discount = () => {
  const end = 25;

  const [start, setStart] = useState(0);

  const percentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    if (start > 0 && start < 25) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1);
      }, 30);
    }
  }, [start]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            console.log(inView);

            if (inView) {
              percentage();
            }
          }}
        >
          <div className="discount_percentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <h3>First wave of presale tickets.</h3>
            <p></p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;

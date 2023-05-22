import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bck_black">
      <Fade delay={500} triggerOnce>
        <div className="font_righteous footer_logo_venue">fabrica.</div>
        <div className="footer_copyright">fabrica. 2023 reserved.</div>
      </Fade>
    </footer>
  );
};

export default Footer;

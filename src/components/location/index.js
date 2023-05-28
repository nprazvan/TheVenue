import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5229.229620335617!2d26.117045668065135!3d44.386829705522594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fe6c167c85ab%3A0x4d7f9dbb209b4abd!2sStrada%20St%C3%A2njeneilor%205%2C%20Bucure%C8%99ti%20077160!5e0!3m2!1sro!2sro!4v1685279712538!5m2!1sro!2sro"
        width="100%"
        height="500px"
        allowFullScreen
        frameBorder="0"
        title="gglemaps"
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;

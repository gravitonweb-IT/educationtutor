import React from "react";
import whatsappIcon from "../componants/assets/whats.png"

const WhatsAppButton1 = () => {
  const phoneNumber = "+916006474119";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
     
      style={{
        backgroundImage: `url(${whatsappIcon})`,
        backgroundSize: "100% 100%",
        width: "50px",
        height: "50px",
        border: "none",
        outline: "none",
        position: 'fixed', 
        bottom: '50px', 
        right: '20px',
        cursor: 'pointer', // add this to show the button is clickable
      }}
    ></button>
  );
};

export default WhatsAppButton1;

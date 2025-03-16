import React from "react";

const Button = ({ text, BGColor }) => {
  return (

    <button style={{ backgroundColor: BGColor, color: "white", padding: "10px", border: "none", borderRadius: "5px"}}>
      {text}
    </button>
  
);
};

export default Button;

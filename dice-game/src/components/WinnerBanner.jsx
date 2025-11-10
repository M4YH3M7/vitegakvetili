
import React from "react";

export default function WinnerBanner({ winnerText, onReset, rounds= 3}) 
{
  if (!winnerText) return null; 

  const bannerStyle = 
  {
    backgroundColor: "#222",
    color: "white",
    padding: "20px",
    // borderRadius: "15px",
    marginTop: "20px",
    fontSize: "24px",
    animation: "fadeIn 0.6s ease-in-out",
  };

  const buttonStyle = 
  {
     marginTop: "20px",
          padding: "12px 30px",
          fontSize: "18px",
          backgroundColor: "white",
          color: winner === "tie" ? "#FFA500" : "#4CAF50",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
  };

  return (
    <div style={bannerStyle}>
      <div>{winnerText}</div>
      <button style={buttonStyle} onClick={onReset}>
        Play Again 🔁
      </button>
    </div>
  );
}

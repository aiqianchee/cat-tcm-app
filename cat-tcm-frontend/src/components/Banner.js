import React from "react";
import "../Banner.css";
import wave from "../assets/wave.svg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>🐾 Welcome to Meow Meow TCM 🐾</h1>
        <p>Healing with whiskers, balance, and purrs ✨</p>
        <img src={wave} alt="wave background" className="wave" />
      </div>
    </div>
  );
}

export default Banner;

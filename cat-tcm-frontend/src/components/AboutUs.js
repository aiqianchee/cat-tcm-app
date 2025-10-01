import React from "react";
import "../AboutUs.css";

function AboutUs() {
  return (
    <section className="about-container">
      <h2 className="about-title">🐾 About Us</h2>

      <p className="about-text">
        At <span className="about-highlight">Meow Meow TCM</span>, we embrace the wisdom of
        <b> ancient Chinese medical practices</b> to restore harmony and vitality
        to our feline friends. We believe that true healing begins by addressing
        the natural flow of energy — <b>Qi (气)</b> — within the body.
      </p>

      <p className="about-text">
        Through techniques of{" "}
        <b>ascending, descending, reinforcing, reducing, warming, and clearing</b>,
        we help relieve pain, balance internal systems, and support recovery from illness.
      </p>

      <p className="about-text">
        Guided by the principle of <b>yin (阴) and yang (阳)</b>, we view every cat’s health
        as a dynamic balance. Our treatments aim not only to ease symptoms,
        but also to strengthen overall well-being — ensuring that each whisker
        and paw lives in comfort and harmony.
      </p>

      <p className="about-text">
        With gentle care and holistic methods, Meow Meow TCM is dedicated to nurturing
        your cat’s <span className="about-highlight">9 lives with balance, health,
        and purrs of comfort</span>. ❤️
      </p>

      <img
        src="/images/yinyang.jpg"
        alt="Our Cat TCM Clinic"
        className="about-img"
      />
    </section>
  );
}

export default AboutUs;

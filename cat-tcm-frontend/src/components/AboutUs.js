//import React from "react";
import React, { useEffect, useState } from "react";
/*
function AboutUs() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>About Us 🐾</h1>
      <p>
        Welcome to <b>Meow Meow TCM</b> — healing with whiskers for over 9 lives!
        We combine the wisdom of Traditional Chinese Medicine (TCM) with the
        gentle care of feline doctors 🐱.
      </p>
      <p>
        Our mission is to bring balance, health, and purrs of comfort to every
        cat patient.
      </p>
    </div>
  );
}

export default AboutUs;
*/
const AboutUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/about")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default AboutUs;
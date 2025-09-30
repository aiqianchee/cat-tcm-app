import React from "react";

function Appointment() {
  return (
    <section>
      <h2>📅 Book Appointment</h2>
      <p>Available Monday – Friday: 10am – 6pm</p>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#7f5af0",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Book Now
      </button>
    </section>
  );
}

export default Appointment;

import React from "react";

function Appointment() {
  return (
    <section style={{ marginBottom: "40px" }}>
      <h2>📅 Book Appointment</h2>
      <iframe
        src="https://forms.gle/27KsSbYZMhP725gr7"
        width="100%"
        height="900"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Appointment Form"
      >
        Loading…
      </iframe>
    </section>
  );
}
export default Appointment;
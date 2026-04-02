import React, { useState, useEffect } from "react";
import "../PhysicianProfile.css"; 

function PhysicianProfile() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/doctors`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch doctors");
        }
        return res.json();
      })
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

//console.log("Doctor data:", doctors);

   return (
    <section style={{ marginBottom: "40px" }}>
      <h2>🐾 Physician Profile</h2>
      <div className="doctor-grid">
        {doctors.map((doc) => (
          <div key={doc.id} className="doctor-card">
            <img
              src={process.env.PUBLIC_URL + doc.photoUrl} 
              alt={doc.name}
              className="doctor-photo"
            />
            <h3>{doc.name}</h3>
            <p><b>Specialty:</b> {doc.specialty}</p>
            <p><b>Experience:</b> {doc.experience} </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PhysicianProfile;
import React, { useState, useEffect } from "react";
/*
function PhysicianProfile() {
  return (
    <section style={{ marginBottom: "40px" }}>
      <h2>👩‍⚕️ Physician Profile</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img 
          src="/images/Whiskers.jpg" 
          alt="Dr. Whiskers" 
          style={{ width: "200px", borderRadius: "10px", marginRight: "20px" }} 
        />
        <div>
          <h3>Dr. Whiskers</h3>
          <p><b>Specialty:</b> Acupuncture & Herbal Therapy</p>
          <p><b>Experience:</b> 5 years of purrfect healing</p>
          <p>
            Dr. Whiskers studied under the wise Master Purr in CatTown,  
            dedicated to balancing feline chi (“气”) through gentle acupuncture and herbs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PhysicianProfile; */

function PhysicianProfile() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <section>
      <h2>🐾 Physician Profile</h2>
      {doctors.map((doc) => (
        <div key={doc.id}>
          <h3>{doc.name}</h3>
          <p><b>Specialty:</b> {doc.specialty}</p>
          <p><b>Experience:</b> {doc.experienceYears} years</p>
        </div>
      ))}
    </section>
  );
}

export default PhysicianProfile;
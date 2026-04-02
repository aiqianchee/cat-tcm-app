import React, { useState, useEffect } from "react";
import "../PhysicianProfile.css";

function PhysicianProfile() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);   // added this 

  const API_BASE_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8080"
      : "https://cat-tcm-app.onrender.com";

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/doctors`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch doctors");
        }
        return res.json();
      })
      .then((data) => {
        setDoctors(data);
        setLoading(false);   // data is loaded, loading end
      })
      .catch((err) => {
        console.error("Error fetching doctors:", err);
        setError("Failed to load doctors 😿");
        setLoading(false);   // error need to remove loading
      });
  }, [API_BASE_URL]);

  return (
    <section style={{ marginBottom: "40px" }}>
      <h2>🐾 Physician Profile</h2>

      
      {loading ? (
        <p>Fetching our purrfect doctors...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="doctor-grid">
          {doctors.map((doc) => (
            <div key={doc.id} className="doctor-card">
              <img
                src={`${process.env.PUBLIC_URL}${doc.photoUrl}`}
                alt={doc.name}
                className="doctor-photo"
              />
              <h3>{doc.name}</h3>
              <p><b>Specialty:</b> {doc.specialty}</p>
              <p><b>Experience:</b> {doc.experience}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default PhysicianProfile;
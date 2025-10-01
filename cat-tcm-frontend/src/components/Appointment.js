import React, { useState } from "react";
import "../Appointment.css";

function Appointment() {
  const [formData, setFormData] = useState({
    location: "",
    physician: "",
    date: "",
    time: "",
    title: "",
    name: "",
    nric: "",
    mobile: "",
    email: "",
    purpose: "",
    remarks: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    
    fetch("http://localhost:8080/api/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Saved:", data);
        alert("Appointment saved successfully!");
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="appointment-container">
      <h2>🐾 Make An Appointment</h2>

      {/* Booking Section */}
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Choose Clinic Location:</label>
          <select name="location" value={formData.location} onChange={handleChange} required>
            <option value="">Select Location</option>
            <option value="meow-centre">Meow TCM Centre</option>
            <option value="purr-hospital">Purr Hospital</option>
          </select>
        </div>

        <div className="form-section">
          <label>Select Physician:</label>
          <select name="physician" value={formData.physician} onChange={handleChange} required>
            <option value="">Select Doctor</option>
            <option value="whiskers">Dr. Whiskers</option>
            <option value="meowmeow">Dr. MeowMeow</option>
            <option value="paws">Dr. Paws</option>
          </select>
        </div>

        <div className="form-section">
          <label>Select Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Select Time:</label>
          <div className="time-slots">
            {["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"].map((slot) => (
              <button
                type="button"
                key={slot}
                className={`time-slot ${formData.time === slot ? "selected" : ""}`}
                onClick={() => setFormData({ ...formData, time: slot })}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Patient Details */}
        <h3>Patient’s Details</h3>
        <div className="form-section">
          <label>Title:</label>
          <select name="title" value={formData.title} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="mr">Mr.</option>
            <option value="ms">Ms.</option>
            <option value="mrs">Mrs.</option>
          </select>
        </div>

        <div className="form-section">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>NRIC / Passport No.:</label>
          <input type="text" name="nric" value={formData.nric} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Mobile No.:</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Requested Purpose of Visit:</label>
          <select name="purpose" value={formData.purpose} onChange={handleChange} required>
            <option value="">Select Purpose</option>
            <option value="pain">Pain Management</option>
            <option value="wellness">Wellness Check</option>
            <option value="diet">Diet & Nutrition</option>
          </select>
        </div>

        <div className="form-section">
          <label>Remarks:</label>
          <textarea name="remarks" value={formData.remarks} onChange={handleChange}></textarea>
        </div>

        <div className="form-section checkbox">
          <label>
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} required />
            I agree to the Privacy Policy and Terms of Use.
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Appointment;

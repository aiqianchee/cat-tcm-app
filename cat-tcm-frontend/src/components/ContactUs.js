import React from "react";
//import React, { useEffect, useState } from "react";
import "../ContactUs.css"; 

function ContactUs() {
  return (
    <section className="contact">
      <div className="contact-info">
        <h2>CONTACT Us</h2>
        <p><b>Address</b><br />9 Lives Street, Purrington, Cat City 🏙️</p>
        <p><b>Phone</b><br /><a href="tel:123-456-7890">123-456-7890</a></p>
        <p><b>Email</b><br /><a href="mailto:cattcm@whiskers.com">meowmeowtcm@whiskers.com</a></p>
        
      </div>

      <div className="contact-gallery">
        <img src="/images/clinic.png" alt="Clinic view 1" />

      </div>
    </section>
  );
}

export default ContactUs; 
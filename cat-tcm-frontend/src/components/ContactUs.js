//import React from "react";
import React, { useEffect, useState } from "react";
import "../ContactUs.css"; // We'll style it separately
/*
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

export default ContactUs; */

const Contact = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch("/contact")
      .then((res) => res.json())
      .then((result) => setContact(result))
      .catch((err) => console.error(err));
  }, []);

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Contact Us</h2>
      <p>{contact.address}</p>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
  );
};

export default Contact;
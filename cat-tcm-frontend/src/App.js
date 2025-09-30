import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink  } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ScopeOfTreatment from "./components/ScopeOfTreatment";
import PhysicianProfile from "./components/PhysicianProfile";
import ContactUs from "./components/ContactUs";
import Appointment from "./components/Appointment";
import "./Navbar.css"; 
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        {/* Navigation Menu */}
        <nav className="navbar">
          <div className="logo">🐾 Meow Meow TCM</div>
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About Us
            </NavLink>
            <NavLink to="/scope" className={({ isActive }) => isActive ? "active" : ""}>
              Scope of Treatment
            </NavLink>
            <NavLink to="/doctors" className={({ isActive }) => isActive ? "active" : ""}>
              Doctors
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact Us
            </NavLink>
            <NavLink to="/appointment" className={({ isActive }) => isActive ? "active" : ""}>
              Book Appointment
            </NavLink>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/scope" element={<ScopeOfTreatment />} />
          <Route path="/doctors" element={<PhysicianProfile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route
            path="/"
             element={
              <>
                <Banner />
                <ScopeOfTreatment />
                <PhysicianProfile />
                <ContactUs />

              </>
            }   
          />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

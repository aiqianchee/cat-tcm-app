import React from "react";
//import React, { useEffect, useState } from "react";
import "../ScopeOfTreatment.css";

const treatments = [
  {
    id: 1,
    title: "Internal Medicine",
    description:
      "Gastrointestinal disorders, cardiovascular conditions, high blood pressure, diabetes, eye diseases (including myopia) and other internal diseases.",
    image: "/images/internal.jpg",
  },
  {
    id: 2,
    title: "Pain Management",
    description:
      "Pain management for body and joint pain, aches, conditions of numbness and itchiness.",
    image: "/images/pain.jpg",
  },
  {
    id: 3,
    title: "Tendon, Muscle Ache & Sport Injury",
    description:
      "Treatment for tissue strain, tendon and muscle injury.",
    image: "/images/sport.png",
  },
  {
    id: 4,
    title: "Children’s Ailments",
    description:
      "Children ailments including cough, cold, digestive disorders and constipation. Regulate and enhance child’s physique.",
    image: "/images/children.jpg",
  },
  {
    id: 5,
    title: "TCM Aesthetics",
    description:
      "Beauty, slimming, fur thinning and fur loss problem.",
    image: "/images/aesthetic.jpg",
  },
  {
    id: 6,
    title: "Women’s Health",
    description:
      "Women’s menstrual irregularities and discomfort, infertility and menopausal syndrome.",
    image: "/images/women.jpg",
  },
];

function ScopeOfTreatment() {
  return (
    <section className="scope-section">
      <h2 className="scope-title">🐾 Scope of Treatment 🐾</h2>
      <div className="scope-grid">
        {treatments.map((treatment) => (
          <div key={treatment.id} className="scope-card">
            <img src={treatment.image} alt={treatment.title} />
            <h3>{treatment.id}. {treatment.title}</h3>
            <p>{treatment.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScopeOfTreatment; 

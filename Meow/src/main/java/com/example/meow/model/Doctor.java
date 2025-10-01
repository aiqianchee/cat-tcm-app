package com.example.meow.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;        // Cat doctor’s name
    private String specialty;   // e.g. acupuncture, herbal medicine
    private int experience;     // years of TCM experience
    @JsonProperty("photo_url")   // tell Jackson to serialize as photo_url
    private String photo_url;
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSpecialty() { return specialty; }
    public void setSpecialty(String specialty) { this.specialty = specialty; }

    public int getExperience() { return experience; }
    public void setExperience(int experience) { this.experience = experience; }

    public String getPhotoUrl() { return photo_url; }
    public void setPhotoUrl(String photo_url) { this.photo_url = photo_url; }
}
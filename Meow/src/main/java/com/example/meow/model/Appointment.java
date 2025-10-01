package com.example.meow.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Booking choices
    private String location;            // e.g., "Meow TCM Centre"
    private String physician;           // e.g., "Dr. Whiskers"

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;             // ISO string "2025-10-18"
    private String time;                // e.g., "12:00 PM"

    // Patient details
    private String title;               // Mr/Ms/Mrs
    private String name;
    private String nric;
    private String mobile;
    private String email;

    private String purpose;             // pain / wellness / etc
    @Column(length = 1000)
    private String remarks;

    private LocalDateTime createdAt = LocalDateTime.now();

    // ---- getters/setters ----
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getPhysician() { return physician; }
    public void setPhysician(String physician) { this.physician = physician; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getNric() { return nric; }
    public void setNric(String nric) { this.nric = nric; }

    public String getMobile() { return mobile; }
    public void setMobile(String mobile) { this.mobile = mobile; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPurpose() { return purpose; }
    public void setPurpose(String purpose) { this.purpose = purpose; }

    public String getRemarks() { return remarks; }
    public void setRemarks(String remarks) { this.remarks = remarks; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}

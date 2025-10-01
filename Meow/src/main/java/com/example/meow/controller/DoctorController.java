package com.example.meow.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DoctorController {

    @RequestMapping("/api/doctors")
    public List<Doctor> getDoctors() {
        return Arrays.asList(
    new Doctor(1L, "Dr. Whiskers", "Acupuncture & Herbal Therapy", "5 years of purrfect healing 🐾", "/images/Whiskers.jpg"),
    new Doctor(2L, "Dr. MeowMeow", "Massage Therapy", "3 years experience in feline relaxation 😺", "/images/MeowMeow.jpg"),
    new Doctor(3L, "Dr. Paws", "Diet & Nutrition", "Helping cats stay healthy and strong 🐱", "/images/Paws.jpg")
);
    }

    // Inner class model
    static class Doctor {
        private Long id;
        private String name;
        private String specialty;
        private String experience;
        private String photo_url;

        public Doctor(Long id, String name, String specialty, String experience, String photo_url) {
            this.id = id;
            this.name = name;
            this.specialty = specialty;
            this.experience = experience;
            this.photo_url = photo_url;
        }

        public Long getId() { return id; }
        public String getName() { return name; }
        public String getSpecialty() { return specialty; }
        public String getExperience() { return experience; }
        public String getPhotoUrl() { return photo_url;}
    }
}

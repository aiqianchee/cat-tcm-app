package com.example.meow.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PageController  {

    @GetMapping("/about")
    public Map<String, String> aboutUs() {
        return Map.of(
            "title", "About Us",
            "description", "We are Cat TCM, healing with whiskers for over 9 lives 🐾"
        );
    }

    @GetMapping("/scope")
    public List<String> scope() {
        return List.of(
            "Internal Medicine",
            "Pain Management",
            "Tendon, Muscle Ache & Sport Injury",
            "Children’s Ailments",
            "TCM Aesthetics",
            "Women’s Health"
        );
    }

    @GetMapping("/contact")
    public Map<String, String> contactUs() {
        return Map.of(
            "address", "📍 Cat Street #9 Lives, Singapore",
            "phone", "📞 1234-5678",
            "email", "cattcm@meow.com"
        );
    }
}

package com.example.meow.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.meow.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}

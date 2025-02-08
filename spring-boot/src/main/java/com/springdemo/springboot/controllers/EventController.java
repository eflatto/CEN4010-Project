package com.springdemo.springboot.controllers;

import com.springdemo.springboot.models.Event;
import com.springdemo.springboot.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
@CrossOrigin("*")
public class EventController {
    @Autowired
    EventRepository eventRepo;

    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepo.findAll();
    }
    @PostMapping
    public Event addEvent(@RequestBody Event event) {
        return eventRepo.save(event);
    }
}

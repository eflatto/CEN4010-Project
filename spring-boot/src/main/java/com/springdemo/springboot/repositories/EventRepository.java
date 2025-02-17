package com.springdemo.springboot.repositories;


import com.springdemo.springboot.models.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EventRepository extends MongoRepository <Event, String> {
    List<Event> findByCreatedBy(String createdBy);
}



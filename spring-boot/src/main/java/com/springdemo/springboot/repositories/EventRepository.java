package com.springdemo.springboot.repositories;


import com.springdemo.springboot.models.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EventRepository extends MongoRepository <Event, String> {

}

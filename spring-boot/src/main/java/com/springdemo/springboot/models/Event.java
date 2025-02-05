package com.springdemo.springboot.models;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
@Document(collection = "events")
public class Event {

    @Id
    private String id; //Event ID

    private String name; // Event name
    private String location; // Venue or online meeting link

    public Event() {
    }

    public Event(String name, String location, String description, boolean isPublic) {
        this.name = name;
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "Event{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}

package com.springdemo.springboot.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "events")
public class Event {
    @Id
    private String id;
    private String title;
    private String date;
    private String location;
    private String createdBy; // User ID of the organizer
    private String description;

    public Event() {
    }

    public Event(String id, String title, String date, String location, String createdBy, String description) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.location = location;
        this.createdBy = createdBy;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Event{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", date='" + date + '\'' +
                ", location='" + location + '\'' +
                ", createdBy='" + createdBy + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
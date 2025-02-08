package com.springdemo.springboot.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import java.util.List;

@Document(collection = "events")
public class Event {

    @Id
    private String id; // Event ID

    private String name; // Event name
    private String location; // Venue or online meeting link
    private String description; // Event description
    private boolean isPublic; // Whether the event is public or private
    private String date; // Event date
    private String organizer; // Event organizer
    private List<String> guestList; // List of guest names
    private double budget; // Budget for the event
    private String reminder; // Reminder for the event (can be a date or message)

    // Default constructor
    public Event() {
    }

    // Constructor with all fields
    public Event(String name, String location, String description, boolean isPublic, String date,
                 String organizer, List<String> guestList, double budget, String reminder) {
        this.name = name;
        this.location = location;
        this.description = description;
        this.isPublic = isPublic;
        this.date = date;
        this.organizer = organizer;
        this.guestList = guestList;
        this.budget = budget;
        this.reminder = reminder;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isPublic() {
        return isPublic;
    }

    public void setPublic(boolean isPublic) {
        this.isPublic = isPublic;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getOrganizer() {
        return organizer;
    }

    public void setOrganizer(String organizer) {
        this.organizer = organizer;
    }

    public List<String> getGuestList() {
        return guestList;
    }

    public void setGuestList(List<String> guestList) {
        this.guestList = guestList;
    }

    public double getBudget() {
        return budget;
    }

    public void setBudget(double budget) {
        this.budget = budget;
    }

    public String getReminder() {
        return reminder;
    }

    public void setReminder(String reminder) {
        this.reminder = reminder;
    }

    @Override
    public String toString() {
        return "Event{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", location='" + location + '\'' +
                ", description='" + description + '\'' +
                ", isPublic=" + isPublic +
                ", date=" + date +
                ", organizer='" + organizer + '\'' +
                ", guestList=" + guestList +
                ", budget=" + budget +
                ", reminder='" + reminder + '\'' +
                '}';
    }
}

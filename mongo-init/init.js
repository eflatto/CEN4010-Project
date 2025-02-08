db = db.getSiblingDB("admin"); // Connect to the admin database

// Create a new user for event_planner_db with readWrite permissions
db.createUser({
    user: "event_user",
    pwd: "event_password",
    roles: [
        { role: "readWrite", db: "event_planner_db" }
    ]
});

// Switch to the event database
db = db.getSiblingDB("event_planner_db");

// Create the "events" collection
db.createCollection("events");

// Insert sample event data
db.events.insertMany([
    {
        name: "Tech Conference",
        location: "San Francisco",
        description: "A large tech conference with industry leaders.",
        isPublic: true,
        date: "2025-03-15",
        organizer: "TechCorp",
        guestList: ["Alice", "Bob"],
        budget: 10000,
        reminder: "2025-03-10"
    },
    {
        name: "Music Festival",
        location: "Los Angeles",
        description: "A weekend of live music and entertainment.",
        isPublic: true,
        date: "2025-06-20",
        organizer: "MusicWorld",
        guestList: ["Charlie", "David"],
        budget: 50000,
        reminder: "2025-06-15"
    }
]);

db = db.getSiblingDB("admin");

db.createUser({
    user: "event_user",
    pwd: "event_password",
    roles: [
        { role: "readWrite", db: "event_planner_db" }
    ]
});

db = db.getSiblingDB("event_planner_db");

db.createCollection("events");

db.events.insertMany([
    {
        title: "Tech Conference",
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
        title: "Music Festival",
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

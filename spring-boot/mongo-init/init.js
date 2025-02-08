// Switch to the database
db = db.getSiblingDB("event_planner_db");

// Create a collection and insert an event
db.events.insertMany([
    {
        name: "Tech Conference 2025",
        date: "2025-06-15",
        location: "Seattle, WA",
        description: "A conference about the latest trends in technology.",
        attendees: 150
    },
    {
        name: "AI Summit 2025",
        date: "2025-07-20",
        location: "San Francisco, CA",
        description: "Exploring the impact of AI on various industries.",
        attendees: 300
    },
    {
        name: "Cybersecurity Expo",
        date: "2025-08-10",
        location: "New York, NY",
        description: "Learn about the latest cybersecurity threats and solutions.",
        attendees: 200
    },
    {
        name: "Cloud Computing Symposium",
        date: "2025-09-05",
        location: "Austin, TX",
        description: "Deep dive into cloud computing and serverless architecture.",
        attendees: 250
    },
    {
        name: "Blockchain Innovators Meetup",
        date: "2025-10-12",
        location: "Miami, FL",
        description: "Discussing decentralized finance and smart contracts.",
        attendees: 180
    },
    {
        name: "IoT and Smart Devices Expo",
        date: "2025-11-03",
        location: "Chicago, IL",
        description: "Exploring the future of connected devices and automation.",
        attendees: 220
    },
    {
        name: "Quantum Computing Workshop",
        date: "2025-12-01",
        location: "Boston, MA",
        description: "Hands-on session on quantum computing concepts.",
        attendees: 100
    },
    {
        name: "DevOps & Agile Conference",
        date: "2026-01-15",
        location: "Denver, CO",
        description: "Best practices in DevOps and Agile methodologies.",
        attendees: 270
    },
    {
        name: "Mobile App Development Summit",
        date: "2026-02-22",
        location: "Los Angeles, CA",
        description: "Discussing trends in iOS and Android app development.",
        attendees: 230
    },
    {
        name: "Data Science & AI Bootcamp",
        date: "2026-03-18",
        location: "Seattle, WA",
        description: "An intensive bootcamp on AI, ML, and Data Science.",
        attendees: 320
    }
]);


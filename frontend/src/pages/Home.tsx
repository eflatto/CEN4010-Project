import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    createdBy: string;
    description: string;
}

const Home = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/events")
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error("Error fetching events:", error));
    }, []);

    return (
        <div className="container">
            {/* Navbar */}
            <div className="bar">
                <h1>Event Planner</h1>
                <Link to="/create-event">Create Event</Link>
            </div>

            {/* Events List */}
            <div>
                <h2 className="upcoming-heading">Upcoming Events</h2>
                {events.length === 0 ? (
                    <p style={{ color: "#fff" }}>No events found.</p>
                ) : (
                    <div className="events-list">
                        {events.map((event) => (
                            <div key={event.id} className="event-card">
                                <h3>{event.title}</h3>
                                <p>
                                    {new Date(event.date).toLocaleString()} - {event.location}
                                </p>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;

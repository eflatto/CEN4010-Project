import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

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
        <div className="container mx-auto p-6">
            {/* Navbar */}
            <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Event Planner</h1>
                {/* ✅ Use Link instead of button to navigate to Create Event page */}
                <Link to="/create-event" className="bg-white text-blue-600 px-4 py-2 rounded">
                    Create Event
                </Link>
            </nav>

            {/* Events List */}
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
                {events.length === 0 ? (
                    <p>No events found.</p>
                ) : (
                    <ul>
                        {events.map((event) => (
                            <li key={event.id} className="border p-4 mb-3 rounded shadow-md">
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                                <p>{event.date} - {event.location}</p>
                                <p className="text-gray-600">{event.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Home;

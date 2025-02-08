import { useEffect, useState } from "react";
import axios from "axios";  // ✅ Ensure Axios is installed

// ✅ Define the Event type
interface Event {
    id: string;
    name: string;
    location: string;
    description: string;
    isPublic: boolean;
    date: string;
    organizer: string;
    guestList: string[];
    budget: number;
    reminder: string;
}

const API_BASE_URL = "http://localhost:8080"; // ✅ Works in browser
 // ✅ Correct API URL inside Docker

const App = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/events`, { withCredentials: false })  // ✅ Ensure no credentials issue
            .then((res) => {
                console.log("API Response:", res.data);  // ✅ Log response data
                setEvents(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching events:", err.message, err.response || err);  // ✅ Log error details
                setError(err.message);
                setLoading(false);
            });
    }, []);


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Upcoming Events</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Failed to load events: {error}</p>}
            {!loading && !error && events.length === 0 && <p>No events found.</p>}
            {!loading && !error && events.length > 0 && (
                <ul className="space-y-4 mt-4">
                    {events.map((event) => (
                        <li key={event.id} className="border p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold">{event.name}</h2>
                            <p><strong>Location:</strong> {event.location}</p>
                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Organizer:</strong> {event.organizer}</p>
                            <p><strong>Description:</strong> {event.description}</p>
                            <p><strong>Budget:</strong> ${event.budget}</p>
                            <p><strong>Reminder:</strong> {event.reminder}</p>
                            <p><strong>Guests:</strong> {event.guestList?.length ? event.guestList.join(", ") : "No guests"}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default App;

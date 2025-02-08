import { useEffect, useState } from 'react';

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

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => console.error('Error fetching events:', err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Upcoming Events</h1>
      {loading ? (
        <p>Loading...</p>
      ) : events.length > 0 ? (
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
              <p><strong>Guests:</strong> {event.guestList.join(', ')}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
};

export default Events;

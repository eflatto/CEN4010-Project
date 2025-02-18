import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CreateEvent.css"; // Import the custom CSS

const CreateEvent = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !date || !location || !description) {
            alert("All fields are required!");
            return;
        }

        setLoading(true);

        const newEvent = {
            title,
            date,
            location,
            description,
            createdBy: "user123", // Change this to the logged-in user's ID
        };

        try {
            const response = await fetch("http://localhost:8080/api/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEvent),
            });

            if (response.ok) {
                alert("Event created successfully!");
                navigate("/"); // Redirect to home page
            } else {
                alert("Failed to create event.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2>Create an Event</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Event Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="datetime-local"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
          <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
          />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create Event"}
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;

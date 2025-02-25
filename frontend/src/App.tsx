import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";
import Navbar from "./pages/Navbar.tsx";
import Login from "./pages/Login";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/create-event"
                    element={

                            <CreateEvent />

                    }
                />
            </Routes>
        </Router>
    );
}

export default App;

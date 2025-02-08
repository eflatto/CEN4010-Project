# Event Planner App

This is a **full-stack event planner application** built using **Spring Boot**, **MongoDB**, and **React**. The app allows users to create and view events, with a backend API handling data storage.

## 🛠️ Tech Stack

- **Backend**: Java, Spring Boot, MongoDB
- **Frontend**: React (Vite)
- **Database**: MongoDB (Dockerized)
- **Containerization**: Docker & Docker Compose

---

## 🚀 Getting Started

### **1. Clone the Repository**

```sh
git clone https://github.com/your-repo/event-planner.git
cd event-planner

## 2. Install Dependencies

Ensure you have Docker and Docker Compose installed on your machine.

### Backend
cd spring-boot
./gradlew build  # Backend build

cd frontend
npm install


docker-compose up --build

This will:

Start a MongoDB instance on localhost:27017
Start the Spring Boot API on http://localhost:8080
Start the React frontend on http://localhost:5173
Stopping the Containers
To stop the application:

docker-compose down








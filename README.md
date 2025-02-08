# CEN4010 - Event Management API

This is a **Spring Boot REST API** designed to manage events using **MongoDB**. The API supports **CRUD operations** (Create, Read, Update, Delete) for event records and is built to be **easily deployable** with Docker.

---

## 🚀 Features
- ✅ **CRUD operations** for event management (Create, Read, Update, Delete)
- ✅ **MongoDB integration** for efficient data storage
- ✅ **Spring Boot REST API** with well-structured endpoints
- ✅ **Docker support** for seamless deployment
- ✅ **Configuration flexibility** via `application.properties`

---

## 📌 Prerequisites
Ensure you have the following installed before running the project:
- **Docker & Docker Compose** → [Download Here](https://docs.docker.com/get-docker/)
---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo

## 2️⃣ Running the Project

### Option 1: Run with Docker (Recommended) 🐳

To containerize and run the project using Docker, follow these steps:

#### Build the Docker Image

```sh
docker build -t event-management-app .

docker-compose up -d


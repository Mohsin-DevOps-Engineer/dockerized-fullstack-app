# Dockerized Full Stack Notes Application

## Overview

This project demonstrates a production-style full stack application deployment using:

- Frontend Application
- Backend API
- MongoDB Database
- Docker
- Docker Compose
- Nginx Reverse Proxy

The application allows users to create and store notes using a MongoDB database running inside Docker containers.

---

## Architecture

User → Nginx → Frontend → Backend API → MongoDB

---

## Features

- Full stack application deployment
- Frontend and backend separation
- MongoDB database integration
- Persistent Docker volumes
- Multi-container architecture
- Docker networking
- Nginx reverse proxy
- Responsive modern UI

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Infrastructure
- Docker
- Docker Compose
- Nginx
- Linux

---

## Project Structure

```bash
dockerized-fullstack-app/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── Dockerfile
│
├── nginx/
│   └── default.conf
│
├── screenshots/
│
├── architecture/
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

## Application Workflow

1. User opens the application in browser.
2. Nginx serves frontend files.
3. Frontend sends API requests to backend container.
4. Backend communicates with MongoDB container.
5. Notes are stored persistently using Docker volumes.

---

## Deployment

Clone repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go to project directory:

```bash
cd dockerized-fullstack-app
```

Run containers:

```bash
docker-compose up --build -d
```

---

## Verify Running Containers

```bash
docker ps
```

Expected containers:

- frontend-container
- backend-container
- mongo-container

---

## Open Application

Open browser:

```bash
http://YOUR_VM_IP
```

---

## MongoDB Verification

Enter MongoDB container:

```bash
docker exec -it mongo-container bash
```

Open Mongo shell:

```bash
mongosh
```

Use database:

```javascript
use notesdb
```

Show collections:

```javascript
show collections
```

Display saved notes:

```javascript
db.notes.find().pretty()
```

---

## Docker Volume Verification

```bash
docker volume ls
```

Expected volume:

```bash
mongo-data
```

---

## Docker Network Verification

```bash
docker network ls
```

Expected network:

```bash
app-network
```

---

## Screenshots

### Frontend UI
- frontend-ui.png

### Added Notes
- note-added.png
- multiple-notes.png

### Running Containers
- docker-ps.png

### Docker Compose
- docker-compose.png

### MongoDB Data
- mongodb-data.png

### Docker Volumes
- docker-volume.png

### Docker Networks
- docker-network.png

### Architecture Diagram
- architecture-diagram.png

---

## Future Improvements

- User authentication
- Kubernetes deployment
- CI/CD pipeline integration
- HTTPS support
- Monitoring with Prometheus & Grafana
- Docker Swarm deployment

---

## Author

Mohsin Qureshi  
DevOps Engineer

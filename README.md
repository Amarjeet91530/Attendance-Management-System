# Attendance Management System

A full-stack attendance management system built with React.js, Node.js, Express.js, and MySQL. The application provides a simple interface for recording attendance and working with attendance records through REST APIs.

## Features

- Record student attendance
- View attendance records
- Update attendance details
- Basic request validation
- REST API based backend
- React based frontend
- MySQL database integration structure
- Responsive interface

## Tech Stack

- React.js
- Node.js
- Express.js
- MySQL
- REST APIs
- Postman for API testing

## Project Structure

```
Attendance-Management-System/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── index.html
│   └── package.json
├── server/
│   ├── controllers/
│   │   └── attendanceController.js
│   ├── routes/
│   │   └── attendanceRoutes.js
│   ├── db.js
│   ├── app.js
│   └── package.json
└── README.md
```

## Local Setup

### Backend

```bash
cd server
npm install
```

Create a `.env` file with:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=attendance_db
```

Create the database and table using your MySQL client.

Start the backend:

```bash
npm run dev
```

### Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

## API

- `GET /api/attendance` - get attendance records
- `POST /api/attendance` - add an attendance record
- `PUT /api/attendance/:id` - update an attendance record

## Database

The backend uses MySQL through the `mysql2` package. Configure the database connection in the environment variables before running the application.

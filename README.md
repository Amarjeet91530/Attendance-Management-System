# Attendance Management System

A full-stack attendance management system built with React.js, Node.js, Express.js, and MySQL. The application provides a simple interface for recording, updating, and reviewing attendance records through REST APIs.

## Features

- Record student attendance
- View attendance records
- Update existing attendance records
- Basic request validation
- REST API based backend
- React based frontend
- MySQL database integration
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
│   ├── vite.config.js
│   └── package.json
├── server/
│   ├── controllers/
│   │   └── attendanceController.js
│   ├── routes/
│   │   └── attendanceRoutes.js
│   ├── db.js
│   ├── schema.sql
│   ├── app.js
│   └── package.json
└── README.md
```

## How It Works

1. The React frontend collects student name, roll number, date, and attendance status.
2. React sends the request to the Express REST API.
3. The controller validates the request.
4. MySQL stores or updates the attendance record using parameterized queries.
5. The API returns the database result to React.
6. The dashboard displays the current records.

## Local Setup

### Database

Run `server/schema.sql` in MySQL to create the database and table.

### Backend

```bash
cd server
npm install
```

Create a `.env` file:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=attendance_db
```

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

Open the Vite URL shown in the terminal.

## API

- `GET /api/attendance` - get attendance records
- `POST /api/attendance` - add an attendance record
- `PUT /api/attendance/:id` - update an attendance record

## Testing

The REST endpoints can be tested independently with Postman. The frontend also exercises the GET, POST, and PUT flows directly.

## Environment Variables

Keep database credentials in `.env`. Do not commit passwords or other secrets to GitHub.

CREATE DATABASE IF NOT EXISTS attendance_db;

USE attendance_db;

CREATE TABLE IF NOT EXISTS attendance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL,
  roll_number VARCHAR(30) NOT NULL,
  date DATE NOT NULL,
  status ENUM('Present', 'Absent') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

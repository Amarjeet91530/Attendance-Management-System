import pool from "../db.js";

export async function getAttendance(req, res) {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM attendance ORDER BY date DESC, id DESC"
    );

    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch attendance records",
      error: error.message
    });
  }
}

export async function createAttendance(req, res) {
  try {
    const { studentName, rollNumber, date, status } = req.body;

    if (!studentName || !rollNumber || !date || !status) {
      return res.status(400).json({
        message: "All attendance fields are required"
      });
    }

    const [result] = await pool.query(
      "INSERT INTO attendance (student_name, roll_number, date, status) VALUES (?, ?, ?, ?)",
      [studentName, rollNumber, date, status]
    );

    const [rows] = await pool.query(
      "SELECT * FROM attendance WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Unable to create attendance record",
      error: error.message
    });
  }
}

export async function updateAttendance(req, res) {
  try {
    const { id } = req.params;
    const { studentName, rollNumber, date, status } = req.body;

    if (!studentName || !rollNumber || !date || !status) {
      return res.status(400).json({
        message: "All attendance fields are required"
      });
    }

    const [result] = await pool.query(
      "UPDATE attendance SET student_name = ?, roll_number = ?, date = ?, status = ? WHERE id = ?",
      [studentName, rollNumber, date, status, id]
    );

    if (!result.affectedRows) {
      return res.status(404).json({ message: "Attendance record not found" });
    }

    const [rows] = await pool.query(
      "SELECT * FROM attendance WHERE id = ?",
      [id]
    );

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Unable to update attendance record",
      error: error.message
    });
  }
}

import { useEffect, useState } from "react";

const apiUrl = "http://localhost:5000/api/attendance";

const emptyForm = {
  studentName: "",
  rollNumber: "",
  date: new Date().toISOString().slice(0, 10),
  status: "Present"
};

export default function App() {
  const [form, setForm] = useState(emptyForm);
  const [records, setRecords] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadRecords() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to load records");
      }

      setRecords(data);
    } catch (error) {
      setMessage(error.message);
    }
  }

  useEffect(() => {
    loadRecords();
  }, []);

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to save attendance");
      }

      setRecords((current) => [data, ...current]);
      setForm(emptyForm);
      setMessage("Attendance recorded successfully.");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <header className="header">
        <div>
          <p className="eyebrow">Student Records</p>
          <h1>Attendance Management</h1>
          <p>Record and review daily attendance from one dashboard.</p>
        </div>
        <div className="count">
          <strong>{records.length}</strong>
          <span>records</span>
        </div>
      </header>

      <section className="card">
        <h2>Mark attendance</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            name="studentName"
            value={form.studentName}
            onChange={handleChange}
            placeholder="Student name"
            required
          />
          <input
            name="rollNumber"
            value={form.rollNumber}
            onChange={handleChange}
            placeholder="Roll number"
            required
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <select name="status" value={form.status} onChange={handleChange}>
            <option>Present</option>
            <option>Absent</option>
          </select>
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Record attendance"}
          </button>
        </form>

        {message && <p className="message">{message}</p>}
      </section>

      <section className="card">
        <div className="section-head">
          <h2>Attendance records</h2>
          <button className="refresh" onClick={loadRecords}>Refresh</button>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Roll No.</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {records.length === 0 ? (
                <tr>
                  <td colSpan="4" className="empty">No attendance records found.</td>
                </tr>
              ) : (
                records.map((record) => (
                  <tr key={record.id}>
                    <td>{record.student_name}</td>
                    <td>{record.roll_number}</td>
                    <td>{record.date?.slice(0, 10)}</td>
                    <td>
                      <span className={record.status === "Present" ? "present" : "absent"}>
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
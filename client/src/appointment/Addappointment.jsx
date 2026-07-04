import { useState, useEffect } from "react";

function AddAppointment({
  editAppointment,
  fetchAppointments,
  setEditAppointment,
}) {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (editAppointment) {
      setPatientName(editAppointment.patientName);
      setDoctorName(editAppointment.doctorName);
      setDate(editAppointment.date);
      setTime(editAppointment.time);
    }
  }, [editAppointment]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointment = {
      patientName,
      doctorName,
      date,
      time,
    };

    if (editAppointment) {
      await fetch(
        `http://localhost:5000/appointments/${editAppointment._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointment),
        }
      );

      alert("Appointment Updated");
      setEditAppointment(null);
    } else {
      await fetch("http://localhost:5000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment),
      });

      alert("Appointment Added");
    }

    fetchAppointments();

    setPatientName("");
    setDoctorName("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <h2>
        {editAppointment ? "Update Appointment" : "Add Appointment"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Doctor Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        />
        <br />
        <br />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">
          {editAppointment ? "Update Appointment" : "Add Appointment"}
        </button>
      </form>
    </div>
  );
}

export default AddAppointment;
import { useEffect, useState } from "react";

function AppointmentList({ setEditAppointment }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const response = await fetch(
      "http://localhost:5000/appointments"
    );

    const data = await response.json();
    setAppointments(data);
  };

  const deleteAppointment = async (id) => {
    if (!window.confirm("Delete this appointment?")) return;

    await fetch(`http://localhost:5000/appointments/${id}`, {
      method: "DELETE",
    });

    alert("Appointment Deleted");
    fetchAppointments();
  };

  return (
    <div>
      <h2>Appointment List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.patientName}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>

              <td>
                <button
                  onClick={() => setEditAppointment(appointment)}
                >
                  Edit
                </button>

                {" "}

                <button
                  onClick={() =>
                    deleteAppointment(appointment._id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
import { useEffect, useState } from "react";

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch("http://localhost:5000/patients");
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePatient = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this patient?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/patients/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Patient Deleted Successfully");
        fetchPatients();
      } else {
        alert("Failed to Delete Patient");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4">
      <h2>Patient List</h2>

      <table className="table table-bordered table-striped">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.length > 0 ? (
            patients.map((patient) => (
              <tr key={patient._id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.phone}</td>

                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() =>
                      alert("Edit functionality will be added next.")
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deletePatient(patient._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No Patients Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
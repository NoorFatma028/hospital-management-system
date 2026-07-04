import { useState, useEffect } from "react";

function AddMedicalRecord({
  addRecord,
  editRecord,
  updateRecord,
  setEditRecord,
}) {
  const [patientName, setPatientName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");

  useEffect(() => {
    if (editRecord) {
      setPatientName(editRecord.patientName);
      setDiagnosis(editRecord.diagnosis);
      setTreatment(editRecord.treatment);
    }
  }, [editRecord]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const record = {
      patientName,
      diagnosis,
      treatment,
    };

    if (editRecord) {
      updateRecord(record);
      setEditRecord(null);
      alert("Medical Record Updated");
    } else {
      addRecord(record);
      alert("Medical Record Added");
    }

    setPatientName("");
    setDiagnosis("");
    setTreatment("");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3 className="text-center">
            {editRecord ? "Update Medical Record" : "Add Medical Record"}
          </h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">
                Patient Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Patient Name"
                value={patientName}
                onChange={(e) =>
                  setPatientName(e.target.value)
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Diagnosis
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Diagnosis"
                value={diagnosis}
                onChange={(e) =>
                  setDiagnosis(e.target.value)
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Treatment
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Treatment"
                value={treatment}
                onChange={(e) =>
                  setTreatment(e.target.value)
                }
                required
              />
            </div>

            <button
              className="btn btn-success w-100"
              type="submit"
            >
              {editRecord ? "Update Record" : "Add Record"}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default AddMedicalRecord;
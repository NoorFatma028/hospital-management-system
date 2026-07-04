function MedicalRecordList({
  records,
  deleteRecord,
  setEditRecord,
}) {
  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-success text-white">
          <h3 className="text-center">
            🏥 Medical Records
          </h3>
        </div>

        <div className="card-body">

          <table className="table table-bordered table-hover table-striped">

            <thead className="table-dark">
              <tr>
                <th>Patient Name</th>
                <th>Diagnosis</th>
                <th>Treatment</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {records.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-danger"
                  >
                    No Medical Records Available
                  </td>
                </tr>
              ) : (
                records.map((record, index) => (
                  <tr key={index}>

                    <td>{record.patientName}</td>

                    <td>{record.diagnosis}</td>

                    <td>{record.treatment}</td>

                    <td>

                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() =>
                          setEditRecord(record)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          deleteRecord(index)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default MedicalRecordList;
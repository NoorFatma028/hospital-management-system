function Sidebar({ setPage }) {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#0d6efd",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 className="text-center mb-4">🏥 HMS</h2>

      <button
        className="btn btn-light w-100 mb-3"
        onClick={() => setPage("dashboard")}
      >
        🏠 Dashboard
      </button>

      <button
        className="btn btn-light w-100 mb-3"
        onClick={() => setPage("patient")}
      >
        👨 Patients
      </button>

      <button
        className="btn btn-light w-100 mb-3"
        onClick={() => setPage("appointment")}
      >
        📅 Appointments
      </button>

      <button
        className="btn btn-light w-100 mb-3"
        onClick={() => setPage("bill")}
      >
        💰 Billing
      </button>

      <button
        className="btn btn-light w-100 mb-3"
        onClick={() => setPage("record")}
      >
        📄 Medical Records
      </button>
    </div>
  );
}

export default Sidebar;
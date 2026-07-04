function Dashboard() {
  return (
    <div>

      <h2 className="mb-4">Dashboard</h2>

      <div className="row">

        <div className="col-md-3">
          <div className="card bg-primary text-white shadow text-center p-3">
            <h1>👨</h1>
            <h4>Patients</h4>
            <h2>120</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-success text-white shadow text-center p-3">
            <h1>📅</h1>
            <h4>Appointments</h4>
            <h2>45</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-warning shadow text-center p-3">
            <h1>💰</h1>
            <h4>Billing</h4>
            <h2>₹52,000</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-danger text-white shadow text-center p-3">
            <h1>📄</h1>
            <h4>Records</h4>
            <h2>130</h2>
          </div>
        </div>

      </div>

      <div className="card mt-5 shadow">
        <div className="card-body">
          <h4>Welcome Admin 👋</h4>
          <p>
            Manage Patients, Appointments, Billing and Medical
            Records using the sidebar.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
import { useState } from "react";

import "./App.css";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import AddPatient from "./patient/AddPatient";
import PatientList from "./patient/PatientList";

import AddAppointment from "./appointment/AddAppointment";
import AppointmentList from "./appointment/AppointmentList";

import AddBill from "./billing/AddBill";
import BillList from "./billing/BillList";

import AddMedicalRecord from "./records/AddMedicalRecord";
import MedicalRecordList from "./records/MedicalRecordList";

function App() {
  const [page, setPage] = useState("dashboard");

  // Medical Record
  const [records, setRecords] = useState([]);
  const [editRecord, setEditRecord] = useState(null);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  const updateRecord = (updatedRecord) => {
    const newRecords = [...records];
    const index = records.findIndex(
      (record) => record === editRecord
    );

    if (index !== -1) {
      newRecords[index] = updatedRecord;
      setRecords(newRecords);
    }
  };

  const deleteRecord = (index) => {
    const newRecords = [...records];
    newRecords.splice(index, 1);
    setRecords(newRecords);
  };

  // Appointment
  const [editAppointment, setEditAppointment] = useState(null);

  const fetchAppointments = () => {
    window.location.reload();
  };

  // Bill
  const [editBill, setEditBill] = useState(null);

  const fetchBills = () => {
    window.location.reload();
  };

  return (
    <div
      style={{
        display: "flex",
        background: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <Sidebar setPage={setPage} />

      <div style={{ flex: 1 }}>
        <Header />

        <div className="container mt-4">

          {page === "dashboard" && <Dashboard />}

          {page === "patient" && (
            <>
              <AddPatient />
              <hr />
              <PatientList />
            </>
          )}

          {page === "appointment" && (
            <>
              <AddAppointment
                editAppointment={editAppointment}
                setEditAppointment={setEditAppointment}
                fetchAppointments={fetchAppointments}
              />

              <hr />

              <AppointmentList
                setEditAppointment={setEditAppointment}
              />
            </>
          )}

          {page === "bill" && (
            <>
              <AddBill
                editBill={editBill}
                setEditBill={setEditBill}
                fetchBills={fetchBills}
              />

              <hr />

              <BillList
                setEditBill={setEditBill}
              />
            </>
          )}

          {page === "record" && (
            <>
              <AddMedicalRecord
                addRecord={addRecord}
                editRecord={editRecord}
                updateRecord={updateRecord}
                setEditRecord={setEditRecord}
              />

              <hr />

              <MedicalRecordList
                records={records}
                deleteRecord={deleteRecord}
                setEditRecord={setEditRecord}
              />
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
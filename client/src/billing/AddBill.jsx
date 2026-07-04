import { useState, useEffect } from "react";

function AddBill({
  editBill,
  fetchBills,
  setEditBill,
}) {
  const [patientName, setPatientName] = useState("");
  const [consultationFee, setConsultationFee] = useState("");
  const [medicineCost, setMedicineCost] = useState("");

  useEffect(() => {
    if (editBill) {
      setPatientName(editBill.patientName);
      setConsultationFee(editBill.consultationFee);
      setMedicineCost(editBill.medicineCost);
    }
  }, [editBill]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const totalAmount =
      Number(consultationFee) + Number(medicineCost);

    const bill = {
      patientName,
      consultationFee,
      medicineCost,
      totalAmount,
    };

    try {
      if (editBill) {
        await fetch(
          `http://localhost:5000/bills/${editBill._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bill),
          }
        );

        alert("Bill Updated");
        setEditBill(null);
      } else {
        await fetch(
          "http://localhost:5000/bills",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bill),
          }
        );

        alert("Bill Added");
      }

      fetchBills();

      setPatientName("");
      setConsultationFee("");
      setMedicineCost("");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>
        {editBill ? "Update Bill" : "Add Bill"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Consultation Fee"
          value={consultationFee}
          onChange={(e) => setConsultationFee(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Medicine Cost"
          value={medicineCost}
          onChange={(e) => setMedicineCost(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          {editBill ? "Update Bill" : "Add Bill"}
        </button>

      </form>
    </div>
  );
}

export default AddBill;
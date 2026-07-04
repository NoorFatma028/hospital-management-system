import { useEffect, useState } from "react";

function BillList() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    const response = await fetch("http://localhost:5000/bills");
    const data = await response.json();
    setBills(data);
  };

  const deleteBill = async (id) => {
    if (!window.confirm("Delete this bill?")) return;

    await fetch(`http://localhost:5000/bills/${id}`, {
      method: "DELETE",
    });

    alert("Bill Deleted");
    fetchBills();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">💰 Bill List</h2>

      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Patient</th>
            <th>Consultation Fee</th>
            <th>Medicine Cost</th>
            <th>Total Amount</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bills.map((bill) => (
            <tr key={bill._id}>
              <td>{bill.patientName}</td>
              <td>₹ {bill.consultationFee}</td>
              <td>₹ {bill.medicineCost}</td>
              <td>
                <b>₹ {bill.totalAmount}</b>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBill(bill._id)}
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

export default BillList;
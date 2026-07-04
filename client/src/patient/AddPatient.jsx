import { useState } from "react";

function AddPatient() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [disease, setDisease] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const patient = {
      name,
      age: Number(age),
      gender,
      disease,
      phone,
    };

    try {
      const response = await fetch("http://localhost:5000/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patient),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Patient Added Successfully");

        setName("");
        setAge("");
        setGender("");
        setDisease("");
        setPhone("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Cannot connect to the server.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Patient</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Gender</label>
          <select
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Disease</label>
          <input
            type="text"
            className="form-control"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Patient
        </button>
      </form>
    </div>
  );
}

export default AddPatient;
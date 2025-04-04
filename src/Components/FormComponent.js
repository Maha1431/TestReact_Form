import React, { useState } from "react";

const FormComponent = ({ onAddRecord }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [range, setRange] = useState("");
  const [valid, setValid] = useState(true);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !email || range === "") {
      alert("All fields except description are required!");
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid email format!");
      return;
    }
    if (range <= 0 || range >= 100) {
      alert("Range must be between 1 and 99!");
      return;
    }

    const storedData = JSON.parse(localStorage.getItem("records")) || [];
    const newId = storedData.length > 0 ? storedData[storedData.length - 1].id + 1 : 1;

    const newRecord = { id: newId, title, description, email, range: Number(range), valid };
    const updatedData = [...storedData, newRecord];

    localStorage.setItem("records", JSON.stringify(updatedData));
    onAddRecord(newRecord);

    setTitle("");
    setDescription("");
    setEmail("");
    setRange("");
    setValid(true);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Add New Record</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label>Range:</label>
      <input type="number" value={range} onChange={(e) => setRange(e.target.value)} required />

      <label>Valid:</label>
      <input type="checkbox" checked={valid} onChange={(e) => setValid(e.target.checked)} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

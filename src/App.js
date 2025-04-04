import React, { useEffect, useState } from "react";
import FormComponent from "./Components/FormComponent";
import TableComponent from "./Components/TableComponent";

const App = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(storedRecords);
  }, []);

  const addRecord = (newRecord) => {
    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    localStorage.setItem("records", JSON.stringify(updatedRecords));
  };

  const filteredRecords = records.filter(
    (record) => record.valid && record.range > 29 && record.range < 61
  );

  return (
    <div>
      <h1>Record Management</h1>
      <FormComponent onAddRecord={addRecord} />
      {filteredRecords.length > 0 ? (
        <TableComponent records={filteredRecords} />
      ) : (
        <p>No records found that match the filter criteria.</p>
      )}
    </div>
  );
};

export default App;

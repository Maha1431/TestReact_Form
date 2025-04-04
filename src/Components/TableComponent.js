import React from "react";

const TableComponent = ({ records }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Records List</h2>
      {records.length === 0 ? (
        <p>No records available</p>
      ) : (
        <table border={1} cellPadding={10}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Email</th>
              <th>Range</th>
              <th>Valid</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.title}</td>
                <td>{record.description || "N/A"}</td>
                <td>{record.email}</td>
                <td>{record.range}</td>
                <td>{record.valid ? "✅" : "❌"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableComponent;

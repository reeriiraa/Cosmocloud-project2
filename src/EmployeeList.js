
import React from 'react';

const EmployeeList = ({ employees, onDelete }) => {
  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee._id}>
          <span>{employee.name} ({employee.emp_id})</span>
          <button onClick={() => onDelete(employee._id)}>Delete</button>
          <button onClick={() => console.log(`Open Employee Page for ${employee.name}`)}>Open</button>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
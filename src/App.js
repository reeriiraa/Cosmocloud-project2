

import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';

const App = () => {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <AddEmployee onAdd={handleAddEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
};

export default App;


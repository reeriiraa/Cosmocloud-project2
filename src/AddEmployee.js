
import React, { useState } from 'react';

const AddEmployee = ({ onAdd, onCancel }) => {
  const [name, setName] = useState('');
  const [empId, setEmpId] = useState('');
  const [address, setAddress] = useState({
    line1: '',
    city: '',
    country: '',
    zipCode: '',
  });
  const [contactMethods, setContactMethods] = useState([
    { contactMethod: 'EMAIL', value: '' },
    { contactMethod: 'PHONE', value: '' },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({
      name,
      empId,
      address,
      contactMethods,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={address.line1} onChange={(event) => setAddress({ ...address, line1: event.target.value })} />
        <input type="text" value={address.city} onChange={(event) => setAddress({ ...address, city: event.target.value })} />
        <input type="text" value={address.country} onChange={(event) => setAddress({ ...address, country: event.target.value })} />
        <input type="text" value={address.zipCode} onChange={(event) => setAddress({ ...address, zipCode: event.target.value })} />
      </label>
      <label>
        Contact Methods:
        {contactMethods.map((contactMethod, index) => (
          <div key={index}>
            <select value={contactMethod.contactMethod} onChange={(event) => setContactMethods([
              ...contactMethods.slice(0, index),
              { ...contactMethod, contactMethod: event.target.value },
              ...contactMethods.slice(index + 1),
            ])}>
              <option value="EMAIL">EMAIL</option>
              <option value="PHONE">PHONE</option>
            </select>
            <input type="text" value={contactMethod.value} onChange={(event) => setContactMethods([
              ...contactMethods.slice(0, index),
              { ...contactMethod, value: event.target.value },
              ...contactMethods.slice(index + 1),
            ])} />
          </div>
        ))}
        </label>
    </form>
    )};     
    export default AddEmployee;

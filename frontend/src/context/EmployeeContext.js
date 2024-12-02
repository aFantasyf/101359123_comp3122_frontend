import React, { createContext, useContext, useState, useEffect } from 'react';
import { getEmployees, deleteEmployee, putEmployees } from '../services/employeeService';
import { useNavigation } from 'react-router-dom';

const EmployeeContext = createContext();

export const useEmployeeContext = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const getEmp = () =>{
    getEmployees()
    .then((data) => setEmployees(data?.Employees || []))
    .catch((error) => console.error("Error fetching employees:", error));
  }
    useEffect(() => {
        getEmp()
    } , []);

  const removeEmployee = async (id) => {
    try {
      const response = await deleteEmployee(id);
      if (response.deleted) {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee._id !== id)
        );
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const editEmployee = async (id, updatedData) => {
    try {
        const response = await putEmployees(id, updatedData);

        if (response) {
            console.log("Employee updated successfully:", response);
        }
    } catch (error) {
        console.error("Error editing employee:", error);
    }
};
  return (
    <EmployeeContext.Provider value={{ employees, setEmployees, removeEmployee, editEmployee, getEmp }}>
      {children}
    </EmployeeContext.Provider>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getEmployees, deleteEmployee, putEmployees } from '../services/employeeService';
import { useNavigation } from 'react-router-dom';

const UserAuthContext = createContext();

export const useUserAuthContext = () => useContext(UserAuthContext);

export const UserAuthProvider = ({ children }) => {

    const login = () =>{
        localStorage.setItem('loggedIn', true);
    }

    const logout = () =>{
        localStorage.setItem('loggedIn', false);
    }

    return (
        <UserAuthContext.Provider value={{ login, logout}}>
          {children}
        </UserAuthContext.Provider>
      );
}
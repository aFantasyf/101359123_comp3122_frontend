import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeProvider } from './context/EmployeeContext';
import EmployeeForm from './components/EmployeeForm';
import UserForm from './components/UserForm';
import LogInForm from './components/LogInForm'
import ViewEmployeeForm from './components/ViewEmployeeForm';
import UpdateEmpForm from './components/UpdateEmpForm';
import { UserAuthProvider } from './context/userContext';

function App() {
  return (
    <UserAuthProvider>
    <EmployeeProvider>
    <BrowserRouter>
      <Routes>
        {/* Default route to show UserForm */}
        <Route 
        path="/" 
        element={<UserForm />} />

        {/* Employee management route */}
        <Route 
        path="/login" 
        element={<LogInForm/>}/>

        <Route
          path="/employee"
          element={<ViewEmployeeForm/>}/>
        <Route 
        path='/addEmployee' 
        element={<EmployeeForm />}/>

      <Route 
        path='/updateEmployee' 
        element={<UpdateEmpForm />}/>
      </Routes>
    </BrowserRouter>
    </EmployeeProvider>
    </UserAuthProvider>
  );
}

export default App;

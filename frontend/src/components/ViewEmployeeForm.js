import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../css/view.css'
import { useEmployeeContext } from '../context/EmployeeContext';
import { useUserAuthContext } from '../context/userContext';


export default function ViewEmployeeForm(){
    const { employees, removeEmployee } = useEmployeeContext();
    const navigate = useNavigate();
    const {logout} = useUserAuthContext();

    const handleDelete = (id) => {
      removeEmployee(id); 
    };
  
    const handleEdit = (employee) => {
      navigate('/updateEmployee', { state: { employee } });
    };
  
    const handleAdd = () => {
      navigate('/addEmployee');
    };
    
    const handleLog = () =>{
        logout();
        navigate('/login')
    }
    
    return (
        <div className="employee-container">
        <div className="employee-box">
              <h1>My Employee List</h1>
              <ul>
                {employees.length > 0 ? (
                  employees.map(item => (
                    <li key={item?._id} className="employee-item">
                      {item?.first_name} {item?.last_name} ({item?.email})
                      <Button
                        color="warning"
                        variant="contained"
                        onClick={() => handleDelete(item?._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>
                    </li>
                  ))
                ) : (
                  <p>No employees found</p>
                )}
                <Button onClick={handleAdd}>Add Employee</Button>
              </ul>
              <Button onClick={handleLog}>Log Out</Button>
            </div>
            </div>
        )
}

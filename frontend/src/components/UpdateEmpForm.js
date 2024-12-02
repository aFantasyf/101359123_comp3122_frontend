import { useForm } from 'react-hook-form';
import { putEmployees } from '../services/employeeService';
import '../css/employeeForm.css';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/view.css';
import { useEmployeeContext } from '../context/EmployeeContext';


export default function UpdateEmpForm() {
    const {  getEmp } = useEmployeeContext();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); 
  const {state} = useLocation();
  const { email, first_name, last_name, department, position, salary, _id } = state.employee; // Read values passed on state

  const onSubmit = async (data) => {
    try {
        data._id = _id
        putEmployees(_id, data)
        .then((res) =>{
            if(res.created){
                getEmp()
                navigate('/employee', { state: {refresh: true} })
            } else {
                console.log("error updating employee")
            }
      })

      navigate('/employee');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          defaultValue={email}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p className="error">Email is required and must be valid</p>}
      </div>

      <div className="form-group">
        <label>First Name</label>
        <input
          defaultValue={first_name}
          type="text"
          {...register("first_name", { required: true })}
        />
        {errors.first_name && <p className="error">First Name is required</p>}
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          defaultValue={last_name}
          type="text"
          {...register("last_name", { required: true })}
        />
        {errors.last_name && <p className="error">Last Name is required</p>}
      </div>

      <div className="form-group">
        <label>Position</label>
        <input
          defaultValue={position}
          type="text"
          {...register("position", { required: true })}
        />
        {errors.position && <p className="error">Position is required</p>}
      </div>

      <div className="form-group">
        <label>Salary</label>
        <input
          defaultValue={salary}
          type="number"
          {...register("salary", { required: true })}
        />
        {errors.salary && <p className="error">Salary is required</p>}
      </div>

      <div className="form-group">
        <label>Department</label>
        <input
          defaultValue={department}
          type="text"
          {...register("department", { required: true })}
        />
        {errors.department && <p className="error">Department is required</p>}
      </div>

      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

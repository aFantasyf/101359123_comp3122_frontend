import { useForm } from 'react-hook-form';
import { postEmployees } from '../services/employeeService';
import '../css/employeeForm.css'
import { useNavigate } from 'react-router-dom';


function EmployeeForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit =  (data) => {
       postEmployees(data)
      .then((res) =>{
        console.log(res)
        if (res.created){
          navigate('/employee')
        } else {
          console.error("Could not add employee")
        }
      })
  };

  const handleAdd = () =>{
    navigate('/employee')
  }

  return (
    <form className="employee-form" onSubmit={handleSubmit(onSubmit)}>

      <div className="form-group">
      <label>Email</label>
      <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <p className="error">Email is required and must be valid</p>}
      </div>

      <div className="form-group">
      <label>Id</label>
      <input type="text" {...register("_id", { required: true })} />
      {errors.Id && <p className="error">Id is required</p>}
      </div>

      <div className="form-group">
      <label>First Name</label>
      <input type="text" {...register("first_name", { required: true })} />
      {errors.first_Name && <p className="error">First Name is required</p>}
      </div>

      <div className="form-group">
      <label>Last Name</label>
      <input type="text" {...register("last_name", { required: true })} />
      {errors.last_Name && <p className="error">Last Name is required</p>}
      </div>

      <div className="form-group">
      <label>Position</label>
      <input type="text" {...register("position", { required: true })} />
      {errors.position && <p className="error">position is required</p>}
      </div>

      <div className="form-group">
      <label>Salary</label>
      <input type="number" {...register("salary", { required: true })} />
      {errors.salary && <p className="error">salary is required</p>}
      </div>

      <div className="form-group">
      <label>Date of Joining(Y/M/D)</label>
      <input type="text" {...register("date_of_joining", { required: true })} />
      {errors.date_of_joining && <p className="error">date_of_joining is required</p>}
      </div>

      <div className="form-group">
      <label>Department</label>
      <input type="text" {...register("department", { required: true })} />
      {errors.Department && <p>Department is required</p>}
      </div>
      <button  className="submit-btn" type="submit">Submit</button>
      <button  className="submit-btn" onClick={handleAdd}>View Employees</button>

    </form>
  );
}

export default EmployeeForm;

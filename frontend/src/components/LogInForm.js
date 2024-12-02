import { useForm } from 'react-hook-form';
import {logIn} from '../services/userService'
import { useNavigate } from 'react-router-dom';
import '../css/userForm.css'
import { useUserAuthContext } from '../context/userContext';

// SPA - different parts of the page

export default function LogInForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); 
    const {login} = useUserAuthContext();

    
    
    const onSubmit = async (data) => {
        const response = await logIn(data)
        if(response){
        login();
        navigate('/employee');
        } else {
            console.log("COULDNT LOG IN")
            alert("Invalid credentials. Please try again.");
        }
  }

  const onSubmit2 = () =>{
    console.log("sign button clicked")
    navigate('/')
}

    
      return (
        <div  className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Log In</h1>
                <label>Email</label>
                <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <p>Email is required and must be valid</p>} <br/>

                <label>Password</label>
                <input type="password" {...register("password", { required: true })} />
                {errors.password && <p>UR MOM is required and must be valid</p>}
                <button type="submit">Log In</button>
            </div>
        </form>
        <button onClick={onSubmit2}>Sign Up</button>
        </div>
        )
}
import { useForm } from 'react-hook-form';
import {signUp} from '../services/userService'
import { useNavigate } from 'react-router-dom';
import '../css/userForm.css'

// SPA - different parts of the page

export default function UserForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); 

    const onSubmit = (data) => {
        signUp(data)
        navigate('/employee');
    }
    const onSubmit2 = () =>{
        console.log('bruh')
        navigate('/login')
    }
    
      return (
        <div  className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1>Sign Up</h1>
                <label>Email</label>
                <input type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <p>Email is required and must be valid</p>} <br/>

                <label>Password</label>
                <input type="password" {...register("password", { required: true })} />
                {errors.password && <p>UR MOM is required and must be valid</p>}
                <button type="submit">Register</button>
            </div>
        </form>
        <button onClick={onSubmit2}>Log In</button>
        </div>

      )
}
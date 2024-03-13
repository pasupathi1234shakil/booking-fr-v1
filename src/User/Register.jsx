import React, {useState} from 'react';
import css from './Register.css';
import axios from 'axios';
 
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit =(e)=>{
        e.preventDefault();

        axios.post('http://localhost:8080/user/register', {username, password})
        .then(response =>{
            console.log('User registered:', response.data);
        })
        .catch(error=>{
            console.log('Error registering user:', error)
        });
    };
    return(
        <div>
        <form onSubmit={handlesubmit}  className='text-center reg'>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/><br></br><br></br>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/><br></br><br></br>
            <button type="submit" className='btn'>Register</button>
        </form>
        </div>
    );
};
export default Register;
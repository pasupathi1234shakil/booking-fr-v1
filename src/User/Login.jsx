import React, {useState} from 'react';
import css from './Login.css';
import axios from 'axios';
 
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit =(e)=>{
        e.preventDefault();

        axios.post('http://localhost:8080/user/login', {username, password})
        .then(response =>{
            console.log('User login:', response.data);
        })
        .catch(error=>{
            console.log('Error login user:', error)
        });
    };
    return(
        <div>
        <form onSubmit={handlesubmit}  className='text-center log'>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/><br></br><br></br>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/><br></br><br></br>
            <a href='http://localhost:3000/Register'>Create new account</a><br></br><br></br>
            <button type="submit" className='btn bg-secondary'>Login</button>
        </form>
        </div>
    );
};
export default Login;
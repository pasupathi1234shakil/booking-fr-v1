import React, { useState } from 'react';
import css from './Register.css';
import axios from 'axios';

const Register = () => {
    const [Name, setName] = useState('');
    const [Emailid, setEmailid] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/register/registerdata', { Name, Emailid, password })
            .then(response => {
                console.log('User registered:', response.data);
            })
            .catch(error => {
                console.log('Error registering user:', error)
            });
    };
    return (
        <div>
            <center>
                <form onSubmit={handlesubmit} className='text-center reg'>
                    <label>Name:</label>
                    <input type="text" value={Name} onChange={(e) => setName(e.target.value)} /><br></br><br></br>
                    <label>Emailid:</label>
                    <input type="text" value={Emailid} onChange={(e) => setEmailid(e.target.value)} /><br></br><br></br>
                    <label>Password:</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br></br><br></br>
                    <button type="submit" className='btn bg-primary'>Register</button>
                </form>
            </center>
        </div>
    );
};
export default Register;
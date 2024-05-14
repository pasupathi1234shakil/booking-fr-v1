import React, { useState } from 'react';
import css from './Admin.css';
import axios from 'axios';

const Register = () => {
    const [Moviename, setMoviename] = useState('');
    const [Person, setPerson] = useState('');
    const [Price, setPrice] = useState('');
    const [CardNumber, setCardNumber] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/Admin/Admindata', { Moviename, Person, Price, CardNumber })
            .then(response => {
                console.log('User admin:', response.data);
            })
            .catch(error => {
                console.log('Error admin user:', error)
            });
    };
    return (
        <div>
            <center>
                <form onSubmit={handlesubmit} className='text-center admin'>
                    <label>Moviename:</label>
                    <input type="text" value={Moviename} onChange={(e) => setMoviename(e.target.value)} /><br></br><br></br>
                    <label>Person:</label>
                    <input type="text" value={Person} onChange={(e) => setPerson(e.target.value)} /><br></br><br></br>
                    <label>Price:</label>
                    <input type='text' value={Price} onChange={(e) => setPrice(e.target.value)} /><br></br><br></br>
                    <label>CardNumber:</label>
                    <input type='text' value={CardNumber} onChange={(e)=> setCardNumber(e.target.value)}/><br></br><br></br>
                    <button type="submit" className='btn bg-primary'>Submit</button>
                </form>
            </center>
        </div>
    );
};
export default Register;
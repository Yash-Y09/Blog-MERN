import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleChange = e => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  // console.log(input)

  const handleSubmit = async e => { //async for we are making the API request
    e.preventDefault() // we use preventDefault to not reload the page on submit button
    try {
      const res = await axios.post("/auth/register", inputs);
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>

        <input required type='text' placeholder='Username' name='username' onChange={handleChange} />
        <input required type='email' placeholder='Email Id' name='email' onChange={handleChange} />
        <input required type='password' placeholder='Password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        <span>Already have Account? <Link to="/login">Login</Link></span>
        <p> This is or Error</p>
      </form>

    </div>
  );
};

export default Register;
import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>

        <input required type='text' placeholder='Username' />
        <input required type='password' placeholder='Password' />
        <button>Login</button>
        <span>Don't have Account? <Link to="/register">Register</Link></span>
        <p> This is or Error</p>
      </form>

    </div>
  )
}

export default Login
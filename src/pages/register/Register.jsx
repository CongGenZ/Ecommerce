import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className='register-container'>
      <div className='register-wrapper'>
        <form action="">
            <h1>Create Your Account</h1>
            <div className='input-box'>
                <input type="text" name="" id="" placeholder='username' />
            </div>
            <div className='input-box'>
                <input type="password" name="" id="" placeholder='password' />
            </div>
            <div className='input-box'>
                <input type="email" name="" id="" placeholder='E-Mail' />
            </div>
            <div className='input-box'>
                <input type="tel" name="" id="" placeholder='Phone Number' />
            </div>
            <div className='input-box'>
                <input type="text" name="" id="" placeholder='Country' />
            </div>
            <div className='register-agreement'>
                <label htmlFor="">
                    <input type="checkbox" name="" id=""  /> I agree to the <b>Term</b> and <b>Privac Policy</b>
                </label>
            </div>
                 <button type='submit'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Register

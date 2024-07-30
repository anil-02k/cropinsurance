import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
          <button>
            Continue
          </button>
          <p className='loginsignup-login'>
              Already have an account? <span>Login here</span>
          </p>
          <div className='loginsignup-agree' style={{display:'inline'}}>
              <input type='checkbox' name='' id='' className='dot'/><span>By continuing, I agree to the terms of use & privacy policy. </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp

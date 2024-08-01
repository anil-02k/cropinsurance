import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData,setFormdata]=useState({
    username:"",
    password:"",
    email:""
  })

const changeHandler=(e)=>{
  setFormdata({...formData,[e.target.name]:e.target.value})
}

  const login=async()=>{
    console.log("Login function Executed",formData);
    let responseData;
    await fetch('https://cropinsurance-backend.onrender.com',{
      method:'POST',
      headers:{
        Accept:"application/form/data",
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }
  
  const signup=async()=>{
    console.log("Signup function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:"application/form/data",
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />
          ) : (
            ""
          )}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
          <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
          {state === "Sign Up" ? (
            <p className="loginsignup-login ">
              Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span>
            </p>
          ) : (
            <p className="loginsignup-login">
              Create an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span>
            </p>
          )}

          <div className="loginsignup-agree" style={{ display: "inline" }}>
            <input type="checkbox" name="" id="" className="dot" />
            <span>
              By continuing, I agree to the terms of use & privacy policy.{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;

import React, { useEffect, useState } from 'react'
import './RegisterPage.css'
import axios from 'axios';

const RegisterPage = () => {
    //state management
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[confirmpassword, setConfirmpassword]=useState('');

      // to get data in register form , so using the useEffect function
    // useEffect(()=>{
    //   console.log(email,password,confirmpassword)
    // },[])


    //clear login credentials after register

    const clearState =()=>{
      setEmail("")
      setPassword("")
      setConfirmpassword("")
    }

    /**
     * form submission
     */
    const handleRegister = async(e)=>{
      e.preventDefault();

      if(password !== confirmpassword){
        alert('password does-not match')
      }
      try{
        //dumyserver
        const response = await axios.post("http://localhost:3000/users",{email,password})
        if(response.status=201){
          clearState()
          alert("Register Successful");
        }
      }catch(err){
        alert('Error register user')
      }
    }
    
  return (
    <>
    <div className='reg-form'>
        <h2 className='reg-logo'>Register Form</h2>
        <br />
        <form className='form' onSubmit={handleRegister}>
            <label>Email:</label>
            <input type="email" placeholder='Enter your Email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br /><br />
            <label>Password:</label>
            <input type="password" placeholder='Enter you password' required value={password} onChange={(e)=>setPassword(e.target.value)}  />
            <br /><br />
            <label>Confirm Password:</label>
            <input type="password" placeholder='Confirm Password' required  value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}  />

            <br /><br />
            <button id='reg-btn' type='submit'>Register</button>

        </form>
    </div>
      
    </>
  )
}

export default RegisterPage;

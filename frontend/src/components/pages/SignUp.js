import React from 'react'
import { useState } from 'react';
const baseUrl = process.env.baseUrl


const SignUp = () => {

  const [storedEmail,setstoredEmail] = useState("");
  const [storedPassword,setstoredPassword] = useState("");

  const localstorageEmail = localStorage.getItem("email");
  const localstoragePassword = localStorage.getItem("password");


  function emailValidation(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email.trim())) {
      console.log("Email Verified");
      return true;
    } else {
      console.log("Email not Verified");
      alert("Incorrect Email");
      return false;
    }
  }

  function signup () {

    const signup_email = document.querySelector('#user-email').value;
    const signup_password = document.querySelector('#user-pw').value;

    if (signup_email === "" || signup_password === "") {
        alert("All fields are required");
        return;
    }

    if (!emailValidation(signup_email)) {
        return; 
    }

    const signupdata = {
      email : signup_email,
      password : signup_password
    }


    fetch(baseUrl + '/auth/signup',{
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupdata)
    })
    .then((resp) => {
      console.log("Response received:", resp);
      return resp.json(); 
    })
    .then((data) => {
      console.log("Parsed data:", data); 
      alert(`Message: ${data.message}`); 
    })
    .catch((err) => console.error("Fetch error:", err));
}

  return (
    <div className='flex justify-center items-center h-screen'>
      <button type="button" className='absolute right-7 top-7 border-2 px-5 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white' onClick={() => (window.location.href = "/")}>Back</button>
      <div className='border-2 lg:w-1/4 py-8 text-center rounded-lg w-[80%]'>
        <h3>Sign Up</h3>
        <div className='flex flex-col justify-center items-center mt-5 gap-2'>
        <label>Email</label>
        <input className='border-2 w-52 rounded-md py-1 px-1' id='user-email'></input>
        </div>
        <div className='flex flex-col justify-center items-center mt-5 gap-2'>
        <label>Password</label>
        <input className='border-2 w-52 rounded-md py-1 px-1' id='user-pw' type='password'></input>
        </div>
        <div className='flex flex-col justify-center items-center mt-5 gap-2'>
        <button className='border-2 px-5 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white' onClick={signup}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp

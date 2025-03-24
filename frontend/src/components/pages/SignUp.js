import React, { useState } from 'react';

const baseUrl = process.env.REACT_APP_BASEURL;

const SignUp = () => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  function emailValidation(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email.trim())) {
      return true;
    } else {
      alert("Incorrect Email");
      return false;
    }
  }

  function signup() {
    if (!signupEmail || !signupPassword) {
      alert("All fields are required");
      return;
    }

    if (!emailValidation(signupEmail)) {
      return;
    }

    const signupData = { email: signupEmail, password: signupPassword };

    fetch(`${baseUrl}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Signup failed");
      }
      return resp.json();
    })
    .then((data) => {
      alert(`Message: ${data.message}`);
    })
    .catch((err) => console.error("Fetch error:", err));
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <button 
        type="button" 
        className='absolute right-7 top-7 border-2 px-5 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white' 
        onClick={() => (window.location.href = "/")}
      >
        Back
      </button>
      <div className='border-2 lg:w-1/4 py-8 text-center rounded-lg w-[80%]'>
        <h3>Sign Up</h3>
        <div className='flex flex-col justify-center items-center mt-5 gap-2'>
          <label>Email</label>
          <input 
            className='border-2 w-52 rounded-md py-1 px-1' 
            value={signupEmail} 
            onChange={(e) => setSignupEmail(e.target.value)} 
          />
        </div>
        <div className='flex flex-col justify-center items-center mt-5 gap-2'>
          <label>Password</label>
          <input 
            className='border-2 w-52 rounded-md py-1 px-1' 
            type='password' 
            value={signupPassword} 
            onChange={(e) => setSignupPassword(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-center items-center mt-5 gap-2'>
          <button 
            className='border-2 px-5 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white' 
            onClick={signup}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

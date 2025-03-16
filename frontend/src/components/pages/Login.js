import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

function login() {

  var login_email = document.querySelector("#user-email").value;
  var login_pw = document.querySelector("#user-pw").value

  if (!login_email || !login_pw) {
    alert("Please enter all the fields");
    return   
  }

  let login_payload = {
    email : login_email,
    pw : login_pw
  }

  console.log("User-email is => ",login_email)

  fetch('http://localhost:5000/auth/login',{
    method : 'POST',
    headers : {'Content-Type': 'application/json'},
    body : JSON.stringify(login_payload)
  })
  .then(resp => {
    console.log("API call successful => ",resp);
    return resp.json()
  })
  .then(data => {
    if (data.previousUser === false) {
      alert("No user registered with this username,please sign up");
      return;
    }

    alert(data.message)

    const token = data.token;
    localStorage.setItem("token",token);
    if (token) {
      navigate('/admin');
    }
  })
  .catch(err => console.log("Error in calling API => ",err))

}

  return (
    <div className='flex justify-center items-center h-screen'>
      <button className='absolute right-7 top-7 border-2 px-5 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white' onClick={() => (window.location.href = "/")}>Back</button>
      <div className='border-2 lg:w-1/4 py-8 text-center rounded-lg w-[80%]'>
        <h3>Login</h3>
        <div className='flex flex-col justify-center items-center mt-5 gap-2'>
        <label>Email</label>
        <input className='border-2 w-52 rounded-md py-1 px-1' id='user-email'></input>
        </div>
        <div className='flex flex-col justify-center items-center mt-5 gap-2'>
        <label>Password</label>
        <input className='border-2 w-52 rounded-md py-1 px-1' id='user-pw' type='password'></input>
        </div>
        <div className='flex flex-col justify-center items-center mt-5 gap-2'>
        <button className='border-2 px-5 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white' onClick={login}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login

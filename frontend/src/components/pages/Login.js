import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BASEURL;

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  function login() {
    if (!loginEmail || !loginPassword) {
      alert("Please enter all the fields");
      return;
    }

    const loginPayload = {
      email: loginEmail,
      pw: loginPassword,
    };

    fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginPayload),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Login failed. Please check your credentials.");
        }
        return resp.json();
      })
      .then((data) => {
        if (data.previousUser === false) {
          alert("No user registered with this email. Please sign up.");
          return;
        }

        alert(data.message);

        const token = data.token;
        if (token) {
          localStorage.setItem("token", token);
          navigate("/admin");
        }
      })
      .catch((err) => {
        console.error("Error in API call:", err);
        alert("An error occurred. Please try again.");
      });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="absolute right-7 top-7 border-2 px-5 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div className="border-2 lg:w-1/4 py-8 text-center rounded-lg w-[80%]">
        <h3>Login</h3>
        <div className="flex flex-col justify-center items-center mt-5 gap-2">
          <label>Email</label>
          <input
            className="border-2 w-52 rounded-md py-1 px-1"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-5 gap-2">
          <label>Password</label>
          <input
            className="border-2 w-52 rounded-md py-1 px-1"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-5 gap-2">
          <button
            className="border-2 px-5 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white"
            onClick={login}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

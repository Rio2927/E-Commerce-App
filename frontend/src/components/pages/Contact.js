import React from "react";
import { useState } from "react";

const baseUrl = process.env.REACT_APP_BASEURL;

const Contact = () => {
  const [formData, setformData] = useState({ email: "", phone: "" });

  function handleChange(e) {
    setformData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  // function handleChange(e) {
  //   setformData((prevData) => ({
  //     ...prevData,
  //     [e.target.name]: e.target.value
  //   }));
  // }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("FormData : ", formData);

    if (formData.email === "" || formData.phone === "") {
      alert("Please enter all the fields");
      return;
    }

    fetch(baseUrl + "/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data received : ", data);
        alert("Data sent successfully");
        window.open(data.URL);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center h-screen">
        <button
          type="button"
          className="absolute right-7 top-7 border-2 px-5 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white"
          onClick={() => (window.location.href = "/")}
        >
          Back
        </button>
        <div className="border-2 lg:w-1/4 py-8 text-center rounded-lg w-[80%] ">
          <h3>Contact Us</h3>
          <div className="flex flex-col justify-center items-center mt-5 gap-2">
            <label>Email</label>
            <input
              className="border-2 w-52 rounded-md py-1 px-1"
              id="leadEmail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 gap-2">
            <label>Phone No.</label>
            <input
              className="border-2 w-52 rounded-md py-1 px-1"
              id="leadContact"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              minLength={10}
              maxLength={10}
            ></input>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 gap-2">
            <button className="border-2 px-5 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white">
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;

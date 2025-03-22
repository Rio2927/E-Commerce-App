import React, { useState, useEffect } from "react";
import Admin from "../individualcomp/Admin";
// import Navbar from "../../Navbar";
// import RouteBar from "../individualcomp/RouteBar";
// import Footer from "../../Footer";
const baseUrl = process.env.REACT_APP_BASEURL;

const AdminPage = () => {
  const [category, setCategory] = useState("");
  const [apiroute, setApiroute] = useState("");
  const optionsArray = [{ product: "Mobiles" }, { product: "Footwear" }];


  function selectCategory (e) {
    setCategory(e.target.value)
  }

  useEffect(() => {
    // console.log("Updated Category ==> ", category);
    // console.log("API route => ",category.toLowerCase())
    setApiroute(category.toLowerCase());
  }, [category]);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <button
        className="absolute right-7 top-7 border-2 px-5 py-2 rounded-md hover:bg-[#1E3A8A] hover:text-white"
        onClick={() => (window.location.href = "/")}
      >
        Back
      </button>
      <div className="flex justify-center items-center flex-col">
        
        <select className="border-2 border-black w-[50%] rounded-md" id="product_input" onChange={selectCategory}>
          <option value="">Select a category</option>
          {optionsArray.map((option,index) => 
          <option key={index} value={option.product}>{option.product}</option>
          )}
        </select>

        <div className="flex p-10">
          <Admin api_url={baseUrl + "/api/" + apiroute} product={category.charAt(0).toUpperCase() + category.slice(1)}></Admin>
          {/* <Admin api_url={baseUrl + "/api/footwear"} product={"Footwear"}></Admin> */}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

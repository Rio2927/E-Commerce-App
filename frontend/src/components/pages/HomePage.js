import React from "react";
import RouteBar from "../individualcomp/RouteBar"
import Slider from "../individualcomp/Slider";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <RouteBar></RouteBar>
      <Slider api_url={"http://localhost:5000/api/mobiles"}></Slider>
      <Slider api_url={"http://localhost:5000/api/footwear"}></Slider>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;

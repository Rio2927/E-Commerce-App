// import React from "react";
// import RouteBar from "../individualcomp/RouteBar";
// import Slider from "../individualcomp/Slider";
// import Navbar from "../../Navbar";
// import Footer from "../../Footer";

// const baseUrl = process.env.REACT_APP_BASEURL;

// const HomePage = () => {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <RouteBar></RouteBar>
//       <Slider api_url={baseUrl + "/api/mobiles"}></Slider>
//       <Slider api_url={baseUrl + "/api/footwear"}></Slider>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default HomePage;


import React from "react";
// import RouteBar from "../individualcomp/RouteBar";
import Slider from "../individualcomp/Slider";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const baseUrl = process.env.REACT_APP_BASEURL || "http://localhost:5000";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold bg-gray-900">
        <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-lg">
          Welcome to Our Store
        </div>
      </div>

      {/* Categories Section */}
      <div className="p-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-blue-500 text-white rounded-lg shadow-lg">Mobiles</div>
          <div className="p-6 bg-green-500 text-white rounded-lg shadow-lg">Footwear</div>
          <div className="p-6 bg-purple-500 text-white rounded-lg shadow-lg">Fashion</div>
          <div className="p-6 bg-red-500 text-white rounded-lg shadow-lg">Electronics</div>
        </div>
      </div>

      {/* Sliders */}
      <div className="p-10">
        <h2 className="text-3xl font-semibold mb-4">Trending Now</h2>
        <Slider api_url={`${baseUrl}/api/mobiles`} />
        <Slider api_url={`${baseUrl}/api/footwear`} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

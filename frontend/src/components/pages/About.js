import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'


const About = () => {
    return (
      <div className="bg-gray-100">
        <Navbar />
  
        {/* About Us Section */}
        <div className="flex flex-col items-center justify-center px-6 py-10">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
            <p className="mt-4 text-gray-600">
              Welcome to <span className="font-semibold">Zoen</span>, your one-stop destination for the latest and trendiest products at unbeatable prices.
            </p>
          </div>
  
          {/* Mission & Vision */}
          <div className="max-w-4xl mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mt-2">
                Our mission is to provide high-quality products with exceptional customer service, ensuring a seamless shopping experience.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
              <p className="text-gray-600 mt-2">
                To be the most customer-centric online store, offering innovative and reliable products that meet the evolving needs of our customers.
              </p>
            </div>
          </div>
  
          {/* Why Choose Us */}
          <div className="max-w-4xl mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-800">Quality Products</h3>
                <p className="text-gray-600 mt-2">We handpick only the best products to ensure quality and durability.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-800">Fast Delivery</h3>
                <p className="text-gray-600 mt-2">We offer quick and reliable shipping to get your orders to you on time.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
                <p className="text-gray-600 mt-2">Our customer service team is always ready to assist you with any inquiries.</p>
              </div>
            </div>
          </div>
  
        </div>
  
        <Footer />
      </div>
    );
  };
  
  export default About;

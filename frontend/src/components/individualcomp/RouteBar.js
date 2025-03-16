import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const categories = [
  "Smartphones", "Grocery", "Payments", "Referrals/Invites", 
  "Fashion", "Electronics", "Footwear", "Personal Care", 
  "Sports & Outdoors", "Auto Parts", "Home, Garden & Tools"
];

const RouteBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="w-full flex justify-center">
      {/* For Larger Screens (Scrollable Navbar) */}
      <div className="hidden md:flex border-black border-2 w-fit p-5 rounded-b-md overflow-x-auto">
        <ul className="flex gap-5">
          {categories.map((item, index) => (
            <li 
              key={index} 
              className="mt-4 cursor-pointer hover:bg-[#1E3A8A] rounded-md p-2 hover:text-white whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* For Small Screens (Dropdown Menu) */}
      <div className="md:hidden w-full">
        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full border-2 border-black p-3 flex justify-between items-center bg-gray-100 rounded-b-md"
        >
          <span>Select Category</span>
          <FiChevronDown className={`text-xl transition-transform ${showDropdown ? "rotate-180" : ""}`} />
        </button>

        {showDropdown && (
          <ul className="border-2 border-black mt-2 p-3 bg-white rounded-md">
            {categories.map((item, index) => (
              <li 
                key={index} 
                className="cursor-pointer hover:bg-[#1E3A8A] rounded-md p-2 hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RouteBar;

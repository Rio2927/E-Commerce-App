import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-slate-800 text-white p-10">
      {/* Footer Content Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Section 1 */}
        <ul>
          <h2 className="text-lg font-semibold">Get to Know Us</h2>
          <li className="cursor-pointer mt-4 hover:text-blue-500">About Zoen</li>
          <li className="cursor-pointer mt-2 hover:text-blue-500">Careers</li>
          <li className="cursor-pointer mt-2 hover:text-blue-500">Press Releases</li>
        </ul>

        {/* Section 2 */}
        <ul>
          <h2 className="text-lg font-semibold">Connect with Us</h2>
          <li className="cursor-pointer mt-4 hover:text-blue-500">Facebook</li>
          <li className="cursor-pointer mt-2 hover:text-blue-500">Twitter</li>
          <li className="cursor-pointer mt-2 hover:text-blue-500">Instagram</li>
        </ul>

        {/* Section 3 */}
        <ul>
          <h2 className="text-lg font-semibold">Be a Seller</h2>
          <li className="cursor-pointer mt-4 hover:text-blue-500">Your Account</li>
          <li className="cursor-pointer mt-2 hover:text-blue-500">100% Purchase Protection</li>
          <li className="cursor-pointer mt-2 hover:text-blue-500">Return Policy</li>
          <li className="cursor-pointer mt-2 hover:text-blue-500">Help</li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © 2025 Zoen. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

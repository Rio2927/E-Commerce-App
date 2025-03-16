// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'


// const Navbar = () => {

//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   function logout() {
//     localStorage.clear();
//     sessionStorage.clear();
//     console.log("Storages cleared");
//     navigate("/");  
//   }

//   return (
//     <div className='w-full h-20 bg-slate-800 text-white flex justify-between p-10'>
//       <h3>Zoen</h3>
//       <ul className='flex gap-8 justify-between'>
//         <li className = 'cursor-pointer hover:text-blue-500'><Link to = "/">Home</Link></li> 
//         <li className = 'cursor-pointer hover:text-blue-500'><Link to = "/admin">Admin</Link></li>
//         <li className = 'cursor-pointer hover:text-blue-500'><Link to = "/about">About</Link></li>
//         <li className = 'cursor-pointer hover:text-blue-500'><Link to = "/contact">Contact</Link></li>
//         <li className = 'cursor-pointer hover:text-blue-500'><Link to = "/cart">Cart</Link></li>
//         <li className = 'cursor-pointer hover:text-blue-500'><Link to = "/createaccount">Sign Up</Link></li>

//         {token ? (
//           <li className = 'cursor-pointer hover:text-blue-500' onClick={logout}>Logout</li>
//         ) : (
//           <li className = 'cursor-pointer hover:text-blue-500'><Link to = "/login">Login</Link></li>
//         )}
        
//       </ul>
      
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  function logout() {
    localStorage.clear();
    sessionStorage.clear();
    console.log("Storages cleared");
    navigate("/");
  }

  return (
    <nav className="w-full bg-slate-800 text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h3 className="text-2xl font-bold">Zoen</h3>

        {/* Hamburger Button (hidden on md+) */}
        <button 
          className="md:hidden text-2xl focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navbar (hidden on small screens) */}
        <ul className="hidden md:flex gap-6">
          <li className="cursor-pointer hover:text-blue-500"><Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:text-blue-500"><Link to="/admin">Admin</Link></li>
          <li className="cursor-pointer hover:text-blue-500"><Link to="/about">About</Link></li>
          <li className="cursor-pointer hover:text-blue-500"><Link to="/contact">Contact</Link></li>
          <li className="cursor-pointer hover:text-blue-500"><Link to="/cart">Cart</Link></li>
          <li className="cursor-pointer hover:text-blue-500"><Link to="/createaccount">Sign Up</Link></li>
          {token ? (
            <li className="cursor-pointer hover:text-blue-500" onClick={logout}>Logout</li>
          ) : (
            <li className="cursor-pointer hover:text-blue-500"><Link to="/login">Login</Link></li>
          )}
        </ul>
      </div>

      {/* Mobile Menu (visible when menuOpen is true) */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-slate-900 py-4 space-y-4">
          <li className="cursor-pointer hover:text-blue-500"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li className="cursor-pointer hover:text-blue-500"><Link to="/admin" onClick={() => setMenuOpen(false)}>Admin</Link></li>
          <li className="cursor-pointer hover:text-blue-500"><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li className="cursor-pointer hover:text-blue-500"><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li className="cursor-pointer hover:text-blue-500"><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>
          <li className="cursor-pointer hover:text-blue-500"><Link to="/createaccount" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
          {token ? (
            <li className="cursor-pointer hover:text-blue-500" onClick={() => { logout(); setMenuOpen(false); }}>Logout</li>
          ) : (
            <li className="cursor-pointer hover:text-blue-500"><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

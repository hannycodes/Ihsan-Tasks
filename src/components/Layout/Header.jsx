import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ECFAE5] p-5 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center">
          <a href="/"><img
            src="/logo.png"
            alt="App Logo"
            className="w-48 h-12 object-cover"
          />
          </a>
        </div>
        <button className="md:hidden text-gray-800 focus:outline-none" onClick={() =>setIsOpen(!isOpen) }>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>)}
          </svg>
        </button>

        <div className="hidden md:flex items-center space-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `no-underline font-bold ${isActive ? "font-bold text-yellow-500" : "text-black"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `no-underline font-bold ${isActive ? "font-bold text-yellow-600" : "text-black"}`
            }
          >
            Tasks
          </NavLink>
        
           <NavLink
            to="/completed"
            className={({ isActive }) =>
              `no-underline font-bold ${isActive ? "font-bold text-yellow-600" : "text-black"}`
            }
          >
            Completed
          </NavLink>
           <NavLink
            to="/incompleted"
            className={({ isActive }) =>
              `no-underline font-bold ${isActive ? "font-bold text-yellow-600" : "text-black"}`
            }
          >
           Incompleted
          </NavLink>
            <NavLink
            to="/explore"
            className={({ isActive }) =>
              `no-underline font-bold ${isActive ? "font-bold text-yellow-600" : "text-black"}`
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `no-underline font-bold ${isActive ? "font-bold text-yellow-600" : "text-black"}`
            }
          >
            About
          </NavLink>
          
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden px-4 py-2 space-y-2">
          <NavLink
            to="/"className="block text-gray-800 hover:blue" onClick={()=> setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks" className="block text-gray-800 hover:blue" onClick={()=> setIsOpen(false)}
          >
            Tasks
          </NavLink>
         
           <NavLink
            to="/completed"className="block text-gray-800 hover:blue" onClick={()=> setIsOpen(false)}
          >
            Completed
          </NavLink>
           <NavLink
            to="/incompleted"className="block text-gray-800 hover:blue" onClick={()=> setIsOpen(false)}
          >
           Incompleted
          </NavLink>
           <NavLink
            to="/explore"className="block text-gray-800 hover:blue" onClick={()=> setIsOpen(false)}
          >
            Explore
          </NavLink>
          <NavLink
            to="/about" className="block text-gray-800 hover:blue" onClick={()=> setIsOpen(false)}
          >
            About
          </NavLink>
        </div>
        )}
      </div>
    </nav>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-[#d6d3cd] p-5 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center">
          <a href="/"><img
            src="/logo.png"
            alt="App Logo"
            className="w-48 h-12 object-cover"
          />
          </a>
        </div>

        <div className="flex items-center space-x-10">
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
      </div>
    </nav>
  );
}

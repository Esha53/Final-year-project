import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { School, Home, List, User, Moon, Sun } from "lucide-react";
import Listing from "./Listing";
import InstituteProfile from "./Profile";

const Institute = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <header className="bg-blue-900 flex items-center justify-between px-6 py-4 shadow-md text-white">
        <div className="flex items-center font-bold text-xl gap-2">
          <School size={28} />
          Institute Portal
        </div>
        <h1 className="text-2xl font-bold flex-grow text-center">
          Welcome to Institute Portal
        </h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-white text-blue-900 rounded-full hover:bg-gray-200 transition"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </header>

      <div className="flex">
        <nav
          className={`w-64 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-md min-h-screen p-4`}
        >
          <ul className="space-y-4">
            <li>
              <Link
                to="/institute/listing"
                className={`flex items-center gap-2 p-3 shadow rounded hover:bg-gray-200 transition ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-white text-black"
                }`}
              >
                <List size={20} />
                My Listing
              </Link>
            </li>
            <li>
              <Link
                to="/institute/profile"
                className={`flex items-center gap-2 p-3 shadow rounded hover:bg-gray-200 transition ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-white text-black"
                }`}
              >
                <User size={20} />
                Profile
              </Link>
            </li>
          </ul>
        </nav>

        {/* Render sub-routes here */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="listing" element={<Listing />} />
            <Route path="profile" element={<InstituteProfile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Institute;

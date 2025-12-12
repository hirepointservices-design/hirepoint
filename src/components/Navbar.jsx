import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="hirepointimage.jpg"
            alt="HirePoint Logo"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <div className="font-bold">HirePoint Careers </div>
            <div className="text-sm text-slate-500">
              Training · Development · Services
            </div>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-slate-600 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

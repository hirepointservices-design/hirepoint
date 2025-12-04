
import React from 'react'

export default function Navbar(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="hirepointimage.avif" 
            alt="HirePoint Logo" 
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <div className="font-bold">HirePoint</div>
            <div className="text-sm text-slate-500">Training · Development · Services</div>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-slate-600 font-semibold">
            <li><a href="#home">Home</a></li>
            {/* <li><a href="#services">Services</a></li> */}
            {/* <li><a href="#about">About</a></li> */}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        {/* <a href="#contact" className="hidden md:inline-block bg-[var(--HirePoint-teal)] text-white px-4 py-2 rounded-md font-bold">Apply Now</a> */}
      </div>
    </header>
  )
}

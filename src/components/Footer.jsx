import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-12 pt-10">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* ABOUT US */}
        <div>
          <h3 className="font-bold text-lg mb-3">About Us</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="/Journey" className="hover:text-white">Journey of HirePoint</Link></li>
            <li><Link to="/Vision" className="hover:text-white">Vision Statement</Link></li>
            <li><Link to="/OrganisationStructure" className="hover:text-white">Organization Structure</Link></li>
          </ul>
        </div>

        {/* TRAINING */}
        <div>
          <h3 className="font-bold text-lg mb-3">Training & Development</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="/TrainingOverview" className="hover:text-white">Overview</Link></li>
          </ul>
        </div>

        {/* STAFFING */}
        <div>
          <h3 className="font-bold text-lg mb-3">Staffing</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="/PermanentStaffing" className="hover:text-white">Permanent Staffing</Link></li>
            <li><Link to="/ContractStaffing" className="hover:text-white">Contract Staffing</Link></li>
          </ul>
        </div>

        {/* ORGANISATIONAL DEVELOPMENT */}
        <div>
          <h3 className="font-bold text-lg mb-3">Organisational Development</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="/OrganisationDevelopment" className="hover:text-white">Overview</Link></li>
            <li><Link to="/ThomasAssessments" className="hover:text-white">Thomas Assessments</Link></li>
          </ul>
        </div>

        {/* NAPS + NATS */}
        <div>
          <h3 className="font-bold text-lg mb-3">National Apprenticeship Training (NAPS)</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="" href="#exampleModal" className="hover:text-white">Brochure</Link></li>
          </ul>

          <h3 className="font-bold text-lg mt-4 mb-3">National Apprenticeship Training Scheme (NATS)</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><Link to="" href="#exampleModal2" className="hover:text-white">Brochure</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-10 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CONNECT WITH US */}
          <div>
            <h3 className="font-semibold mb-3">Connect with Us</h3>
            <div className="flex gap-4 text-xl">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/hirepointservices"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>


          {/* SUBSCRIBE */}
          <div>
            <h3 className="font-semibold mb-3">Subscribe with Us</h3>
            <form
              action=""
              method="post"
              target="_blank"
              className="flex"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="Enter your email"
                className="p-2 rounded-l bg-slate-800 border border-slate-600 text-white w-full"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 rounded-r text-white"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* PRIVACY + COPYRIGHT */}
          <div className="text-sm text-slate-300">
            <Link
              to="/services"
              className="hover:text-white"
            >
              PRIVACY POLICY
            </Link>

            <p className="mt-4">
              © {new Date().getFullYear()} <span className="font-bold">HirePoint</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

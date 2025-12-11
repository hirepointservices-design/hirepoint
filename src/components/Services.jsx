import React, { useState } from "react";

const Icon = ({ name }) => {
  if (name === "naps")
    return (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#fff" />
      </svg>
    );
  if (name === "nats")
    return (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#fff" />
      </svg>
    );
  return null;
};

export default function ServicesNavbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const services = [
    {
      key: "about",
      title: "About HirePoint",
      color: "bg-orange-500 hover:bg-orange-600",
      submenu: [
        { text: "Journey of HirePoint", link: "/Journey" },
        { text: "Vision Statement", link: "/Vision" },
        { text: "Organization Structure", link: "/OrganisationStructure" },
      ],
    },
    {
      key: "naps",
      title: "National Apprenticeship Training (NAPS)",
      color: "bg-pink-600 hover:bg-pink-700",
      modal: "napsModal",
    },
    {
      key: "nats",
      title: "National Apprenticeship Training Scheme (NATS)",
      color: "bg-green-500 hover:bg-green-600",
      modal: "natsModal",
    },
    {
      key: "training",
      title: "Training & Development",
      color: "bg-gray-500 hover:bg-gray-600",
      submenu: [
        { text: "Training Overview", link: "/TrainingOverview" },
      ],
    },
    {
      key: "staffing",
      title: "Staffing",
      color: "bg-blue-500 hover:bg-blue-600",
      submenu: [
        { text: "Permanent Staffing", link: "/PermanentStaffing" },
        { text: "Contract Staffing", link: "/ContractStaffing" },
      ],
    },
    {
      key: "od",
      title: "Organisational Development",
      color: "bg-lime-500 hover:bg-lime-600",
      submenu: [
        { text: "Overview", link: "/Organisational_Development" },
        { text: "Thomas Assessments", link: "/ThomasAssessments" },
      ],
    },
  ];

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4">
        <ul className="flex space-x-2">
          {services.map((s) => (
            <li
              key={s.key}
              className={`relative ${s.color} rounded-md`}
              onMouseEnter={() => setOpenDropdown(s.key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {s.modal ? (
                <a
                  href={`#${s.modal}`}
                  className="block px-4 py-2 text-white font-semibold cursor-pointer"
                >
                  {s.title}
                </a>
              ) : (
                <button className="block px-4 py-2 text-white font-semibold cursor-pointer">
                  {s.title}
                </button>
              )}

              {/* Dropdown menu */}
              {s.submenu && openDropdown === s.key && (
                <ul className="absolute left-0 mt-1 bg-white shadow-lg rounded-md z-50 w-48">
                  {s.submenu.map((item, i) => (
                    <li key={i} className="border-b last:border-b-0">
                      <a
                        href={item.link}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

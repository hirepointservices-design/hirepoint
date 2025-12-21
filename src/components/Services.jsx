import React, { useState } from "react";
import { Modal } from "./Modal";

export default function ServicesNavbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [modalOpen, setModalOpen] = useState({ naps: false, nats: false });

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
      modal: "naps",
      pdfUrl: "/pdf/nats.pdf",
    },
    {
      key: "nats",
      title: "National Apprenticeship Training Scheme (NATS)",
      color: "bg-green-500 hover:bg-green-600",
      modal: "nats",
      pdfUrl: "/pdf/nats.pdf", // PDF placed in public folder
    },
    {
      key: "training",
      title: "Training & Development",
      color: "bg-gray-500 hover:bg-gray-600",
      submenu: [{ text: "Training Overview", link: "/TrainingOverview" }],
    },
    {
      key: "staffing",
      title: "Staffing Types",
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
        { text: "Overview", link: "/OrganisationDevelopment" },
        { text: "Thomas Assessments", link: "/ThomasAssessments" },
      ],
    },
  ];

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4">
        <ul className="flex space-x-2">
          {services.map((s) => (
            <li key={s.key} className="relative">
              <div
                className={`rounded-md ${s.color} pb-2`}
                onMouseEnter={() => setOpenDropdown(s.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="block px-4 py-2 text-white font-semibold"
                  onClick={() => {
                    if (s.modal) {
                      setModalOpen({ ...modalOpen, [s.modal]: true });
                    }
                  }}
                >
                  {s.title}
                </button>

                {/* Dropdown */}
                {s.submenu && openDropdown === s.key && (
                  <ul className="absolute left-0 top-full bg-white shadow-lg rounded-md z-50 w-52">
                    {s.submenu.map((item, i) => (
                      <li key={i} className="border-b last:border-b-0">
                        <a
                          href={item.link}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* NAPS Images Modal */}
      {modalOpen.naps && (
        <Modal
          title="National Apprenticeship Training (NAPS)"
          pdfUrl={services.find((s) => s.key === "naps").pdfUrl}
          isOpen={modalOpen.naps}
          setIsOpen={(val) => setModalOpen({ ...modalOpen, naps: val })}
        />
      )}

      {/* NATS PDF Modal */}
      {modalOpen.nats && (
        <Modal
          title="National Apprenticeship Training Scheme (NATS)"
          pdfUrl={services.find((s) => s.key === "nats").pdfUrl}
          isOpen={modalOpen.nats}
          setIsOpen={(val) => setModalOpen({ ...modalOpen, nats: val })}
        />
      )}
    </header>
  );
}

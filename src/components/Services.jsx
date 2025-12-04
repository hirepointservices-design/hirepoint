import React, { useState } from "react";

const Icon = ({ name }) => {
  if (name === "naps")
    return (
      <svg width="40" height="40" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#0b6d6f" />
        <path d="M6 12h12" stroke="#fff" strokeWidth="1.5" />
      </svg>
    );
  if (name === "nats")
    return (
      <svg width="40" height="40" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="#0b6d6f" />
        <path d="M8 12h8" stroke="#fff" strokeWidth="1.5" />
      </svg>
    );
  return (
    <svg width="40" height="40" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="6" fill="#0b6d6f" />
    </svg>
  );
};

export default function Services() {
  const [open, setOpen] = useState(null);

  const services = [
    {
      key: "about",
      title: "About HirePoint",
      desc: "HirePoint offers apprenticeship programs",
      color: "#f58022",
      submenu: [
        { text: "Journey of HirePoint", link: "#" },
        { text: "Vision Statement", link: "#" },
        { text: "Organization Structure", link: "#" },
        { text: "MD Profile", link: "#" },
      ],
    },

    {
      key: "naps",
      title: "National Apprenticeship Training (NAPS)",
      desc: "Industry-ready apprenticeship skills.",
      color: "#c62750",
      modal: "napsModal",
    },

    {
      key: "nats",
      title: "National Apprenticeship Training Scheme (NATS)",
      desc: "Government-aligned training pathways.",
      color: "#79c04e",
      modal: "natsModal",
    },

    {
      key: "training",
      title: "Training & Development",
      desc: "Short & long-term modules.",
      color: "#999999",
      submenu: [
        { text: "Training Overview", link: "https://yashas.asia/Training_Development" },
      ],
    },

    {
      key: "staffing",
      title: "Staffing",
      desc: "Recruitment and placement services.",
      color: "#6595ce",
      submenu: [
        { text: "Permanent Staffing", link: "https://yashas.asia/Permanent_Staffing" },
        { text: "Contract Staffing", link: "https://yashas.asia/contract_staffing" },
      ],
    },

    {
      key: "od",
      title: "Organisational Development",
      desc: "HR & OD interventions.",
      color: "#8ebe3e",
      submenu: [
        { text: "Overview", link: "https://yashas.asia/Organisational_Development" },
        { text: "Thomas Assessments", link: "https://yashas.asia/Thomas_Assessments" },
      ],
    },
  ];

  return (
    <section id="services" className="py-10">
      <h2 className="text-2xl font-bold mb-6">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((s) => (
          <div
            key={s.key}
            className="p-6 rounded-2xl shadow cursor-pointer"
            style={{ background: s.color }}
            onClick={() => setOpen(open === s.key ? null : s.key)}
          >
            <div className="flex items-center gap-4 mb-3">
              <Icon name={s.key} />
              <h3 className="font-semibold text-lg text-white">{s.title}</h3>
            </div>

            <p className="text-white opacity-90">{s.desc}</p>

            {/* Dropdown / Modal Window */}
            {open === s.key && (
              <div className="mt-4 bg-white text-black p-4 rounded-xl shadow-lg animate-fadeIn">
                {/* If submenu exists */}
                {s.submenu && (
                  <ul className="space-y-2">
                    {s.submenu.map((m, i) => (
                      <li key={i}>
                        <a href={m.link} className="text-blue-600 underline">
                          {m.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {/* If modal-type service */}
                {s.modal && (
                  <div className="text-sm">
                    <p className="mb-2 font-semibold">More details coming soon…</p>
                    <button className="bg-black text-white px-4 py-1 rounded">
                      Open Window
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}

import React from "react";

export default function OrganisationDevelopment() {
  return (
    <section className="w-full">

      {/* HERO IMAGE */}
      <div className="w-full flex justify-center py-10">
        <img
          src="/images/organisation_development.jpg"
          alt="Organisational Development"
          className="max-w-xs md:max-w-md drop-shadow-xl"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 leading-relaxed text-slate-800">

        <h1 className="text-3xl font-bold mb-6 text-[var(--HirePoint-teal)]">
          Organisational Development – Overview
        </h1>

        <p className="mb-4">
          HirePoint Services approaches Organisational Development (OD) as a strategic and systematic 
          methodology to enhance business effectiveness. We align strategy, people, and processes to 
          ensure optimal organisational performance.
        </p>

        <p className="mb-4">
          Our OD initiatives prepare organisations for future challenges by fostering a culture where 
          employees understand and deliver on organisational objectives. We focus on both “hard” 
          elements—policies, structure, and systems—and “soft” elements—skills, behaviours, culture, 
          and leadership styles—to drive performance and engagement.
        </p>

        {/* SERVICES */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-[var(--HirePoint-teal)]">
          Our Organisational Development Services
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Organisational Health Survey & Diagnostics</li>
          <li>Organisational Restructuring & Change Management</li>
          <li>Compensation and Benefits Benchmarking</li>
          <li>Assessment Centres & Talent Evaluation</li>
          <li>Designing Performance Management Systems</li>
          <li>Formulating HR Policies & Processes</li>
          <li>Employee Engagement & Motivation Programs</li>
          <li>Drafting and Certification of Standing Orders</li>
          <li>Human Resources Advisory & Strategic Consulting</li>
        </ul>

      </div>
    </section>
  );
}

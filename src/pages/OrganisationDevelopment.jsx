import React from "react";
import heroImg from "/images/organisation_development.jpg"; // update path if needed

export default function OrganisationDevelopment() {
  return (
    <section className="w-full">

      {/* HERO IMAGE */}
      <div className="w-full flex justify-center py-10">
        <img
          src={heroImg}
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
          Organisational Development is a planned, systematic approach to improved organisational 
          effectiveness – one that aligns strategy, people and process.
        </p>

        <p className="mb-4">
          Organisational Development enables an organisation to be prepared for the future by creating 
          an environment where employees can understand, embody, and deliver the organisation’s 
          objectives. OD involves both “hard” elements — strategy, policies, structures and systems — 
          and “soft” elements that develop skills, behaviours, attitudes, culture, and leadership styles 
          that drive optimum performance.
        </p>

        {/* SERVICES */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-[var(--HirePoint-teal)]">
          Our Services
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Organisation Health Survey</li>
          <li>Organisation Restructuring</li>
          <li>Compensation and Benefit Survey</li>
          <li>Assessment Centres</li>
          <li>Formulation of Performance Management Systems</li>
          <li>Formulation of HR Policies & Processes</li>
          <li>Employee Engagement Initiatives</li>
          <li>Drafting and Certification of Standing Orders</li>
          <li>Human Resources Advisory Services</li>
        </ul>

      </div>
    </section>
  );
}

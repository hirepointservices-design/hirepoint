import React from "react";

export default function PermanentStaffing() {
  return (
    <section className="w-full">

      {/* HERO IMAGE */}
      <div className="w-full flex justify-center py-10">
        <img
          src="/images/permanent_staffing.jpg" 
          alt="Permanent Staffing"
          className="max-w-xs md:max-w-md drop-shadow-xl"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 leading-relaxed text-slate-800">

        <h1 className="text-3xl font-bold mb-6 text-[var(--HirePoint-teal)]">
          Permanent & Contract Staffing – Overview
        </h1>

        <p className="mb-4">
          HirePoint Services has a dedicated team of recruitment professionals
          with extensive domain expertise, capable of delivering high-quality
          end-to-end staffing solutions tailored to client requirements.
        </p>

        <p className="mb-4">
          We specialize in helping clients identify the right talent at the
          right time for projects or permanent positions, catering to all
          levels—junior, middle, and senior management.
        </p>

        {/* PROCESS */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-[var(--HirePoint-teal)]">
          Process & Search Methodology
        </h2>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Understanding the client organization’s business, structure, culture, and future growth plans.
          </li>
          <li>
            Mapping position-specific competencies including job title, deliverables, accountabilities, and key result areas.
          </li>
          <li>
            Creating a search strategy to effectively identify suitable candidates.
          </li>
          <li>
            Industry/Organization Mapping: Identifying industries or companies with relevant resources.
          </li>
          <li>
            People Mapping: Leveraging networks, databases, and research to build an initial list of candidates.
          </li>
          <li>
            Evaluation: Assessing candidate alignment with organizational needs and confirming mutual interest.
          </li>
          <li>
            Interviews: Facilitating interview processes for shortlisted candidates.
          </li>
          <li>
            Selection and post-recruitment follow-up by HirePoint Services.
          </li>
        </ol>

        {/* SPECIALIZATION */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-[var(--HirePoint-teal)]">
          Industry Specialization
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Automobile and Auto Components</li>
          <li>Aerospace</li>
          <li>FMCG</li>
          <li>Engineering</li>
          <li>Pharmaceutical</li>
          <li>Media and Entertainment</li>
          <li>Construction / Real Estate</li>
          <li>Information Technology</li>
          <li>Semiconductor / Electronics / Embedded Systems</li>
          <li>Banking, Finance and Insurance</li>
          <li>Textiles / Garments</li>
          <li>Oil & Gas / Power / Infrastructure / Energy</li>
        </ul>
      </div>
    </section>
  );
}

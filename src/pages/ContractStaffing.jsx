import React from "react";

export default function ContractStaffing() {
  return (
    <section className="w-full">
      {/* HERO IMAGE */}
      <div className="w-full flex justify-center py-10">
        <img
          src="/images/contract_staffing.jpg"
          alt="Contract Staffing"
          className="max-w-xs md:max-w-md drop-shadow-xl"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 leading-relaxed text-slate-800">
        <h1 className="text-3xl font-bold mb-6 text-[var(--HirePoint-teal)]">
          Contract Staffing – Overview
        </h1>

        <p className="mb-4">
          HirePoint Services delivers comprehensive contract staffing solutions
          designed to help organizations effectively manage workforce
          challenges while maintaining operational efficiency. Our approach
          focuses on enhancing productivity, improving quality standards, and
          optimizing costs—allowing clients to remain focused on their core
          business objectives.
        </p>

        <p className="mb-4">
          We take complete responsibility for manpower management, statutory
          compliance, payroll administration, and employee lifecycle
          management for the temporary workforce deployed through HirePoint
          Services. This ensures seamless operations and complete regulatory
          adherence for our clients.
        </p>

        <p className="mb-4">
          In today’s dynamic business environment, outsourcing enables
          organizations to remain agile and responsive. Contract staffing
          offers the flexibility required to scale teams during growth phases,
          manage seasonal demands, or optimize workforce strength during
          periods of reduced activity.
        </p>

        <p className="mb-4">
          Our Contract Staffing Services provide an effective solution for
          addressing short-term and project-based manpower requirements.
          Organizations leverage our expertise to access qualified talent,
          manage workload fluctuations, and control employee-related costs—
          while retaining the ability to convert high-performing talent into
          long-term assets.
        </p>

        {/* SECTION TITLE */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-[var(--HirePoint-teal)]">
          Leveraging Outsourcing to Meet Executive / Non-Executive Needs
        </h2>

        <p className="mb-4">
          Organizations increasingly outsource HR and staffing functions to
          improve efficiency and reduce operational overheads. Contract
          staffing allows businesses to streamline non-core activities, scale
          resources quickly, and align workforce costs with business demands.
        </p>

        <p className="mb-4">
          By partnering with HirePoint Services, organizations benefit from
          improved cost control, enhanced cash flow, and the ability to remain
          resilient in fluctuating economic conditions—while ensuring access
          to skilled and dependable talent.
        </p>

        {/* SPECIALIZATION */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-[var(--HirePoint-teal)]">
          Our Contract Staffing Specialisation
        </h2>

        <p className="mb-4">
          HirePoint Services offers contract staffing solutions across a wide
          range of industry verticals, supporting leading organizations in
          sectors such as Automobiles, Engineering, Aerospace, FMCG,
          Pharmaceuticals, Media & Entertainment, Infrastructure, Information
          Technology, Electronics, Semiconductors, Banking, Financial Services,
          Insurance, Textiles & Garments, Oil & Gas, Power, Energy, and allied
          industries.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Executive & Administrative Staffing</li>
          <li>Technical Staffing: BE / Diploma / ITI / Graduates</li>
          <li>
            Non-Technical Staffing: Helpers, Housekeeping, and General Support
            Staff
          </li>
        </ul>
      </div>
    </section>
  );
}

import React from "react";
import heroImg from "/assets/contract_staffing.jpg"; // update path if needed

export default function ContractStaffing() {
  return (
    <section className="w-full">

      {/* HERO IMAGE */}
      <div className="w-full flex justify-center py-10">
        <img
          src={heroImg}
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
          YasHas brings in solutions to support the management in facing business challenges.
          Our focal point is on raising productivity through improved quality, efficiency as
          well as cost reduction, thus enabling the customer to concentrate on its core
          business activities. We undertake the complete Man Management, Statutory,
          Compliance and Administrative responsibility of the Temporary Staff provided by us.
        </p>

        <p className="mb-4">
          Outsourcing is one way for organisations to build agility into their operations by
          providing the flexibility needed to navigate changing business climates, be it
          entering an upturn, downturn or times of stability.
        </p>

        <p className="mb-4">
          Our Contract Staffing Services is an alternate solution to fill short-term needs for
          qualified employees. Companies rely on a temporary staffing agency’s contract
          staffing services to support upcoming projects, meet seasonal requirements and
          reduce their workforce during lean periods. Hiring individuals on a contract basis
          allows companies to balance staffing levels and retain the available talent while
          reducing employee-related costs.
        </p>

        {/* SECTION TITLE */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-[var(--HirePoint-teal)]">
          Leveraging Outsourcing to Meet Executive / Non-Executive Needs
        </h2>

        <p className="mb-4">
          Organisations opt to outsource HR activities for a variety of reasons, primarily due
          to the need to reduce operational costs. Outsourcing enables organisations to reduce
          the size of non-strategic functions and scale operations efficiently to meet changing
          business needs. This ultimately improves gross margins, increases cash flow, and
          helps businesses withstand unstable economic environments.
        </p>

        {/* SPECIALIZATION */}
        <h2 className="text-2xl font-bold mt-10 mb-4 text-[var(--HirePoint-teal)]">
          Our Contract Staffing Specialisation
        </h2>

        <p className="mb-4">
          We provide Contract Staffing across multiple industry verticals, catering to the needs of
          leading organisations in the fields of Automobiles, Engineering, Automotive, Aerospace,
          FMCG, Pharmaceutical, Media and Entertainment, Infrastructure, Information Technology,
          Semiconductor, Electronics, Embedded Systems, Banking, Finance, Insurance, Textiles,
          Garments, Oil & Gas, Power, Infrastructure and Energy.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Executive / Administrative Staffing</li>
          <li>Technical Staffing: BE / Diploma / ITI / Graduates</li>
          <li>Non-Technical Staffing: Helper / Housekeeping / Unskilled Staffing</li>
        </ul>

      </div>
    </section>
  );
}

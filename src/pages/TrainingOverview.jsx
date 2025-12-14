import React from "react";

export default function TrainingOverview() {
  return (
    <section className="w-full">
      {/* HERO IMAGE */}
      <div className="w-full py-10 flex justify-center">
        <img
          src="/images/train_overview.jpg"
          alt="Training Overview"
          className="max-w-xs md:max-w-md drop-shadow-xl"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 leading-relaxed text-slate-800">
        <h1 className="text-3xl font-bold mb-6 text-[var(--HirePoint-teal)]">
          Training & Development – Overview
        </h1>

        <p className="mb-4">
          HirePoint Services customizes training programs based on participants’ profiles and
          the organization’s business needs. Training needs are assessed through discussions
          with senior management, HR, and line managers, and appropriate interventions are
          recommended to maximize learning and performance impact.
        </p>

        <p className="mb-4">
          Our training methodology ensures that objectives are fully met through
          interactive classroom sessions, case studies, simulations, role-plays,
          exercises, action plans, and assignments. Practical learning helps
          participants realize their true potential. We emphasize experiential learning
          under the motto: <strong>“Experience is the best teacher.”</strong>
        </p>

        <p className="mb-4">
          Trainings integrate activities that simulate real-life business and workplace
          situations in a controlled, risk-free, and non-threatening environment, enhancing
          practical application and confidence.
        </p>

        <p className="mb-4">
          Structured experiential learning allows learners to explore, comprehend, and adapt
          behaviors, uncovering unconscious competencies and identifying growth areas while
          safely challenging inhibitions and building self-awareness.
        </p>

        {/* TRAINING LIST */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Training Modules Offered
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Behavioural / Functional Training</li>
          <li>Managerial Development Program (MDP)</li>
          <li>Personal Effectiveness</li>
          <li>Transactional Analysis for Personal Excellence</li>
          <li>Neuro-Linguistic Programming (NLP)</li>
          <li>Front Line Leadership Development (Connect to Engage)</li>
          <li>Work Life Enrichment</li>
          <li>Communication Skills</li>
          <li>Train The Trainer</li>
          <li>Stress Management Skills</li>
          <li>Neethi Shatakam – Personal Excellence Guide</li>
          <li>Yoga of Nine Emotions – Personality Development</li>
          <li>Governing Business & Relationships</li>
          <li>MBTI – Team & Leadership Effectiveness</li>
          <li>Finance and Non-Finance for Managers</li>
          <li>Executive Coaching</li>
          <li>Conflict Resolution</li>
          <li>Technical Training</li>
          <li>Total Productive Maintenance (TPM)</li>
          <li>Quality Circles</li>
          <li>5S & Lean Management</li>
          <li>Industrial Safety Training</li>
        </ul>
      </div>
    </section>
  );
}

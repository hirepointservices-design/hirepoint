import React from "react";
import heroImg from "/assets/train_overview.jpg"; // <-- update path based on your project

export default function TrainingOverview() {
  return (
    <section className="w-full">
      {/* HERO IMAGE */}
        <div className="w-full py-10 flex justify-center">
        <img
            src={heroImg}
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
          The Philosophy of YasHas is to customize Training Programs based on
          Participants’ Profile and the Organization’s business needs. YasHas
          initially assesses the training needs though discussions with Senior
          Management, HR & Line Managers and accordingly advises the
          organizations on the type of training intervention required.
        </p>

        <p className="mb-4">
          The Training methodology ensures that the training needs and
          objectives are met in totality. Our Learning methods are Interactive
          Classroom Sessions with Case Studies, Simulations, Related Games,
          Assignments, Role-plays, Exercises, and Action Plans. This aspect of
          Practical Training helps the participants to realize their true
          potential. We emphasize the process of Experiential Learning as
          <strong> “Experience is the best teacher”.</strong>
        </p>

        <p className="mb-4">
          The training integrates a variety of fun-filled activities that
          simulate real-life situations and are conducted in a controlled,
          risk-free and non-threatening environment.
        </p>

        <p className="mb-4">
          Structured Experiential Learning is a method that simulates
          experiences and creates an opportunity for learners to discover,
          comprehend, understand and alter attitudes and behaviors. It
          sensitizes participants to their unconscious competencies by unveiling
          blind and dark quadrants in their personality – challenging
          inhibitions, questioning habits, confronting fears, and expressing
          views in a non-judgmental way.
        </p>

        {/* TRAINING LIST */}
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Training Modules Offered
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Behavioural / Functional</li>
          <li>Managerial Development Program (MDP)</li>
          <li>Personal Effectiveness</li>
          <li>Transactional Analysis for Personal Excellence</li>
          <li>Neuro-Linguistic Programming</li>
          <li>Front Line Leadership Development (Connect to Engage)</li>
          <li>Work Life Enrichment</li>
          <li>Communication Skills</li>
          <li>Train The Trainer</li>
          <li>Stress Management Skills</li>
          <li>Neethi Shatakam – A Guide for Personal Excellence</li>
          <li>Yoga of Nine Emotions – Personality Development</li>
          <li>Governing Business & Relationship</li>
          <li>MBTI – Working Teams / Leadership</li>
          <li>Finance and Non Finance</li>
          <li>Executive Coaching</li>
          <li>Conflict Resolution</li>
          <li>Technical Training</li>
          <li>TPM</li>
          <li>Quality Circle</li>
          <li>5S</li>
          <li>Lean Management</li>
          <li>Industrial Safety</li>
        </ul>
      </div>
    </section>
  );
}

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Journey from "./pages/Journey"; // Ensure filename has capital J
import Vision from "./pages/Vision";   // Your new Vision page
import OrganisationStructure from "./pages/OrganisationStructure"; 
import TrainingOverview from "./pages/TrainingOverview";
import PermanentStaffing from "./pages/PermanentStaffing";
import ContractStaffing from "./pages/ContractStaffing";
import OrganisationDevelopment from "./pages/OrganisationDevelopment";
import ThomasAssessments from "./pages/ThomasAssessments";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <main className="max-w-6xl mx-auto px-6 py-10">
                <Services />
              </main>
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />

        {/* Journey Page */}
        <Route path="/Journey" element={<Journey />} />

        {/* Vision Page */}
        <Route path="/vision" element={<Vision />} />
        <Route path="/OrganisationStructure" element={<OrganisationStructure />} />
        <Route path="/TrainingOverview" element={<TrainingOverview />} />
        <Route path="/PermanentStaffing" element={<PermanentStaffing />} /> 
        <Route path="/ContractStaffing" element={<ContractStaffing />} />
        <Route path="/OrganisationDevelopment" element={<OrganisationDevelopment />} />
        <Route path="/ThomasAssessments" element={<ThomasAssessments />} />
      </Routes>

      <Footer />
    </div>
  );
}

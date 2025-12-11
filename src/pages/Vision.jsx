import React from "react";
import visionImg from "/assets/vision.webp"; // ← update path if needed

export default function VisionMission() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            OUR VISION
          </h2>

          <p className="text-lg leading-relaxed mb-8">
            Nurture, Transform & Deliver The Best Human Resource Management Services.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            MISSION STATEMENT
          </h2>

          <ul className="space-y-3 text-lg leading-relaxed list-disc pl-6">
            <li>Understanding the socio-economic diversity</li>
            <li>Creating a robust HR process</li>
            <li>Building a self-motivated and competitive team</li>
            <li>Ensuring the best Human Resource Management Services</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={visionImg}
            alt="Vision and Mission Illustration"
            className="max-w-full md:max-w-[400px] drop-shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
